'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');

// Create instance of an express app

const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const players = {};

io.on('connection', function (socket) {
  console.log('a user connected: ', socket.id);
  players[socket.id] = {
    flipX: false,
    x: Math.floor(Math.random() * 400) + 50,
    y: Math.floor(Math.random() * 500) + 50,
    playerId: socket.id,
  };
  console.log('HERE IS PLAYERS', players);
  // Send the playes obj to the new player
  socket.emit('currentPlayers', players);
  // Update all other players of the new player
  socket.broadcast.emit('newPlayer', players[socket.id]);

  // When player disconnects, remove them from our players obj
  socket.on('disconnect', function () {
    console.log('user disconnected: ', socket.id);
    delete players[socket.id];
    // emit a message to all players to remove this player
    io.emit('user has left', socket.id);
  });

  // when player moves, update the player data
  socket.on('playerMovement', function (movementData) {
    players[socket.id].x = movementData.x;
    players[socket.id].y = movementData.y;
    players[socket.id].flipX = movementData.flipX;
    // emit message to all players about the player that moved
    socket.broadcast.emit('playerMoved', players[socket.id]);
  });
});

//body parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());

// // require passport auth
// require('./auth/auth');

app.use(express.static(__dirname + '/public'));

// sends index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

const { db } = require('./server/db/index');
const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    if (process.env.SEED === 'true') {
      await seed();
    } else {
      await db.sync();
      console.log('db synced!');
    }
    httpServer.listen(PORT, () =>
      console.log(`Listening on port ${PORT}, join the DYKES!`)
    );
  } catch (error) {
    console.log(error);
  }
};

init();

'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');

// Create instance of an express app
const app = express();

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
    app.listen(PORT, () =>
      console.log(`Listening on port ${PORT}, join the DYKES!`)
    );
  } catch (error) {
    console.log(error);
  }
};

init();

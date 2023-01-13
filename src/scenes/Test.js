import { Scene } from 'phaser';
import { Lorn } from '../chars/Lorn';
import { Jags } from '../chars/Jags';

class Test extends Scene {
  chars = [];
  playerOne;
  playerTwo;
  x = innerWidth / 2;
  y = innerHeight / 2;
  socket = io();

  constructor(data) {
    super('Test');
  }

  preload() {
    this.load.image('shiny_stars', '/assets/backgrounds/shiny_stars.png');

    this.load.image('lorn', '/assets/chars/lorn/lorn-test.png');
    this.load.image('jags', '/assets/chars/jags/jags-test.png');
  }

  create() {
    this.otherPlayers = this.physics.add.group();

    this.scale.displaySize.setAspectRatio(16 / 9);
    this.scale.refresh();

    //Background
    this.background = this.add.image(0, 0, 'shiny_stars').setOrigin(0, 0);
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    // Creating Player1 (Lorn)
    // this.lorn = new Lorn(this, x, y).setPosition(
    //   innerWidth * 0.2,
    //   innerHeight * 0.65
    // );

    // // Creating Player2 (Jags)
    // this.jags = new Jags(this, x, y).setPosition(
    //   innerWidth * 0.8,
    //   innerHeight * 0.65
    // );
    // this.jags.flipX = true;

    // Listen for web socket events
    this.socket.on('currentPlayers', function (players) {
      Object.keys(players).forEach(function (id) {
        if (players[id].playerId === this.socket.id) {
          addPlayer(this, players[id]);
        } else {
          addOtherPlayer(this, players[id]);
        }
      });
    });

    this.socket.on('newPlayer', function (playerInfo) {
      addOtherPlayers(this, players[id]);
    });

    // // Collision
    // this.physics.add.collider(this.lorn, this.jags);
  }

  addPlayer(playerInfo) {
    this.playerOne = new Lorn(this, playerInfo.x, playerInfo.y);
  }

  addOtherPlayer(playerInfo) {
    this.playerTwo = new Jags(this, playerInfo.x, playerInfo.y);
    this.otherPlayers.add(this.playerTwo);
  }

  update() {
    if (this.playerOne) {
      this.playerOne.update();
    }
    if (this.playerTwo) {
      this.playerTwo.update();
    }
  }
}

export default Test;

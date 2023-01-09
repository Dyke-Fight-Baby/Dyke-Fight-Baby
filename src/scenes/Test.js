import { Scene } from 'phaser';
import { Lorn } from '../chars/Lorn';
import { Jags } from '../chars/Jags';

class Test extends Scene {
  chars = [];
  lorn;
  jags;

  constructor(data) {
    super('Test');
  }

  preload() {
    this.load.image('shiny_stars', '/assets/backgrounds/shiny_stars.png');

    this.load.image('lorn', '/assets/chars/lorn/lorn-test.png');
    this.load.image('jags', '/assets/chars/jags/jags-test.png');
  }

  create() {
    this.socket = io();

    this.scale.displaySize.setAspectRatio(16 / 9);
    this.scale.refresh();

    const x = innerWidth / 2;
    const y = innerHeight / 2;

    //Background
    this.background = this.add.image(0, 0, 'shiny_stars').setOrigin(0, 0);
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    // Creating Player1 (Lorn)
    this.lorn = new Lorn(this, x, y).setPosition(
      innerWidth * 0.2,
      innerHeight * 0.65
    );

    // Creating Player2 (Jags)
    this.jags = new Jags(this, x, y).setPosition(
      innerWidth * 0.8,
      innerHeight * 0.65
    );
    this.jags.flipX = true;

    // Collision
    this.physics.add.collider(this.lorn, this.jags);
  }

  update() {
    this.lorn.update();
    this.jags.update();
  }
}

export default Test;

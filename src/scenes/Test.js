import { Scene } from 'phaser';

class Test extends Scene {
  constructor(data) {
    super('Test');
  }

  preload() {
    this.load.image('shiny_stars', '/assets/backgrounds/shiny_stars.png');

    this.load.image('lorn', '/assets/chars/lorn/lorn-test.png');
    this.load.image('jags', '/assets/gamedevs/chars/jags/jags-test.png');
  }

  create() {
    this.scale.displaySize.setAspectRatio(16 / 9);
    this.scale.refresh();

    const x = innerWidth / 2;
    const y = innerHeight / 2;

    //Background
    this.background = this.add.image(0, 0, 'shiny_stars').setOrigin(0, 0);
    this.background.displayWidth = this.sys.canvas.width;
    this.background.displayHeight = this.sys.canvas.height;

    let lornTest = this.add.sprite(100, 100, 'lorn').setScale(3.5);
    let jagsTest = this.add.sprite(100, 100, 'jags').setScale(3.5);
    jagsTest.flipX = true;
  }
  update() {}
}

export default Test;

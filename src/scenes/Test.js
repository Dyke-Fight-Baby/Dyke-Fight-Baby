import { Scene } from 'phaser';

class Test extends Scene {
  constructor() {
    super('Test');
  }

  preload() {
    this.load.image('shiny_stars', '/assets/backgrounds/shiny_stars.png');
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
  }
  update() {}
}

export default Test;

import * as Phaser from 'phaser';
import Test from './scenes/Test';

const config = {
  type: Phaser.AUTO,
  dom: { createContainer: true },
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'game',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: innerWidth,
    height: innerHeight,
  },
  scene: [Test],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },

  render: {
    pixelArt: true,
  },
};

const game = new Phaser.Game(config);

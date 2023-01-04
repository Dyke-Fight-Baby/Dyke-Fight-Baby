import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  music;

  constructor() {
    super('Preloader');
  }

  preload() {
    // Load Message
    this.loadText = this.add.text(
      innerWidth * 0.05,
      innerHeight * 0.95,
      'Loading... ',
      {
        fontSize: '24px',
        fill: '#FFFFFF',
        fontStyle: 'italic',
      }
    );

    // Lorn Assets
    // Jags Assets
  }

  create() {
    this.loadText.setText('Loading... Complete: click here to begin.');
    this.loadText.setInteractive();

    this.loadText.on('pointerup', () => {
      this.start();
    });
  }

  start() {
    // Need user input for music so I've tied it with starting the game... don't ask :(
    // this.music.play(this.musicConfig);
    this.scene.start('Test', {
      music: this.music,
    });
  }
}

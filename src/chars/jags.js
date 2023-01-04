import Phaser from 'phaser';
import { Character } from './Character';

export class Jags extends Character {
  constructor(scene, x, y) {
    super(scene, x, y, 'jags');

    this.init();
  }

  init() {
    console.log('Jags initialized!');
  }

  create() {
    // Create Input Event
    this.cursors = this.scene.input.keyboard;

    // key objects
    this.cursors.keyobj_w = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.W
    );
    this.cursors.keyobj_s = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S
    );
    this.cursors.keyobj_a = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.A
    );
    this.cursors.keyobj_d = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    );
  }
}

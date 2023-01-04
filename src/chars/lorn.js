import { Character } from './Character';

export class Lorn extends Character {
  constructor(scene, x, y) {
    super(scene, x, y, 'lorn');

    this.init();
  }

  init() {
    console.log('Lorn initialized!');
  }

  create() {
    // Create Input Event
    this.cursors = this.scene.input.keyboard;

    // key objects
    this.cursors.keyobj_up = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.UP
    );
    this.cursors.keyobj_down = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.DOWN
    );
    this.cursors.keyobj_left = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.LEFT
    );
    this.cursors.keyobj_right = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT
    );
  }
}

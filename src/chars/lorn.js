import { Character } from './Character';

export class Lorn extends Character {
  constructor(scene, x, y) {
    super(scene, x, y, 'lorn');

    // Making the homie
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

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
    this.cursors.keyobj_left = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.LEFT
    );
    this.cursors.keyobj_down = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.DOWN
    );
    this.cursors.keyobj_right = this.scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT
    );
  }

  update() {
    // MOVEMENT
    // Move Left
    if (this.cursors.keyobj_left.isDown) {
      this.body.setVelocityX(-500);
      this.flipX = true;

      // Move Right
    } else if (this.cursors.keyobj_right.isDown) {
      this.body.setVelocityX(500);
      this.flipX = false;

      // Idle
    } else {
      this.body.setVelocityX(0);
    }

    // Grounded Jump
    if (this.cursors.keyobj_up.isDown && this.body.blocked.down) {
      this.body.setVelocityY(-450);
    }

    // Fast-falling
    if (this.cursors.keyobj_s.isDown && this.body.blocked.down) {
      this.body.setVelocityY(400);
    }
  }
}

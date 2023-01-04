import Phaser from 'phaser';

export class Character extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, spriteSheet) {
    super(scene, x, y, spriteSheet);

    this.init();

    if (this.scene.chars) this.scene.chars.push(this);
    else throw 'You must add an chars array to this scene.';
  }

  init() {
    this.is_character = true;
    this.hp = 10;
  }
}

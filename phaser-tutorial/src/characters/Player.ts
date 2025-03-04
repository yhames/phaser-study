import Config from '../scenes/Config';
import { Sprites } from '../scenes/Constant';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene) {
    super(scene, Config.width / 2, Config.height / 2, Sprites.player.key);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.scale = 2;
    this.setDepth(20);
    this.setBodySize(28, 32);
  }
}

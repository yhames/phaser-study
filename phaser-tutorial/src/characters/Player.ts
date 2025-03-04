import { Sprites } from '../scenes/Constant';
import { config } from '../scenes/Game';

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene) {
    super(
      scene,
      (config.width as number) / 2,
      (config.height as number) / 2,
      Sprites.player.key,
    );
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.scale = 2;
    this.setDepth(20);
    this.setBodySize(28, 32);
  }
}

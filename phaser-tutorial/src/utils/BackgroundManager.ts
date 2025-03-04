import { config } from '../scenes/Game';

export function setBackGround(
  scene: Phaser.Scene,
  backgroundTexture: string,
): Phaser.GameObjects.TileSprite {
  return scene.add
    .tileSprite(
      0,
      0,
      config.width as number,
      config.height as number,
      backgroundTexture,
    )
    .setOrigin(0, 0);
}

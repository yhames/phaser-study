import Config from '../scenes/Config';

export function setBackGround(
  scene: Phaser.Scene,
  backgroundTexture: string,
): Phaser.GameObjects.TileSprite {
  return scene.add
    .tileSprite(0, 0, Config.width, Config.height, backgroundTexture)
    .setOrigin(0, 0);
}

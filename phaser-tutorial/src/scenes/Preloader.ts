import { Audios, Fonts, Scenes, Sprites } from './scene.config';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(Scenes.Preloader);
  }

  init() {}

  preload() {
    {
      this.load.spritesheet(Sprites.player.key, Sprites.player.path, {
        frameWidth: 32,
        frameHeight: 36,
      });
      this.load.spritesheet(Sprites.mob1.key, Sprites.mob1.path, {
        frameWidth: 28,
        frameHeight: 28,
      });
      this.load.spritesheet(Sprites.mob2.key, Sprites.mob2.path, {
        frameWidth: 32,
        frameHeight: 32,
      });
      this.load.spritesheet(Sprites.mob3.key, Sprites.mob3.path, {
        frameWidth: 32,
        frameHeight: 32,
      });
      this.load.spritesheet(Sprites.mob4.key, Sprites.mob4.path, {
        frameWidth: 32,
        frameHeight: 32,
      });
      this.load.spritesheet(Sprites.lion.key, Sprites.lion.path, {
        frameWidth: 48,
        frameHeight: 64,
      });
      this.load.spritesheet(Sprites.explosion.key, Sprites.explosion.path, {
        frameWidth: 32,
        frameHeight: 32,
      });
      this.load.spritesheet(Sprites.clawWhite.key, Sprites.clawWhite.path, {
        frameWidth: 32,
        frameHeight: 32,
      });
      this.load.spritesheet(Sprites.clawYellow.key, Sprites.clawYellow.path, {
        frameWidth: 32,
        frameHeight: 32,
      });
      this.load.spritesheet(Sprites.catnip.key, Sprites.catnip.path, {
        frameWidth: 64,
        frameHeight: 64,
      });
      this.load.spritesheet(Sprites.expUp.key, Sprites.expUp.path, {
        frameWidth: 16,
        frameHeight: 16,
      });
    }

    {
      this.load.audio(Audios.beam.key, Audios.beam.path);
      this.load.audio(Audios.scratch.key, Audios.scratch.path);
      this.load.audio(Audios.hitMob.key, Audios.hitMob.path);
      this.load.audio(Audios.growl.key, Audios.growl.path);
      this.load.audio(Audios.explosion.key, Audios.explosion.path);
      this.load.audio(Audios.expUp.key, Audios.expUp.path);
      this.load.audio(Audios.hurt.key, Audios.hurt.path);
      this.load.audio(Audios.nextLevel.key, Audios.nextLevel.path);
      this.load.audio(Audios.gameOver.key, Audios.gameOver.path);
      this.load.audio(Audios.gameClear.key, Audios.gameClear.path);
      this.load.audio(Audios.pauseIn.key, Audios.pauseIn.path);
      this.load.audio(Audios.pauseOut.key, Audios.pauseOut.path);
    }

    {
      this.load.bitmapFont(
        Fonts.pixelFont.key,
        Fonts.pixelFont.path,
        Fonts.pixelFont.data,
      );
    }
  }

  create() {
    this.add.text(20, 20, 'Loading game...');
    // TODO: here
  }
}

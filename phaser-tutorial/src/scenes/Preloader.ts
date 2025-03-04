import { Audios, Fonts, Scenes, Sprites } from './Constant';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(Scenes.Preloader);
  }

  init() {}

  preload() {
    // Load sprites
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

    // Load audio
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

    // Load bitmap font
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
    this.scene.start(Scenes.PlayingScene);

    // MOBS
    this.anims.create({
      key: 'mob1_anim',
      frames: this.anims.generateFrameNumbers(Sprites.mob1.key),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: 'mob2_anim',
      frames: this.anims.generateFrameNumbers(Sprites.mob2.key),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: 'mob3_anim',
      frames: this.anims.generateFrameNumbers(Sprites.mob3.key),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: 'mob4_anim',
      frames: this.anims.generateFrameNumbers(Sprites.mob4.key),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: 'lion_anim',
      frames: this.anims.generateFrameNumbers(Sprites.lion.key),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: 'lion_idle',
      frames: this.anims.generateFrameNumbers(Sprites.lion.key, {
        start: 0,
        end: 0,
      }),
      frameRate: 1,
      repeat: 0,
    });

    // PLAYERS
    this.anims.create({
      key: 'player_anim',
      frames: this.anims.generateFrameNumbers(Sprites.player.key),
      frameRate: 12,
      repeat: -1,
    });
    this.anims.create({
      key: 'player_idle',
      frames: this.anims.generateFrameNumbers(Sprites.player.key, {
        start: 0,
        end: 0,
      }),
      frameRate: 1,
      repeat: 0,
    });

    // EFFECT
    this.anims.create({
      key: 'explode',
      frames: this.anims.generateFrameNumbers(Sprites.explosion.key),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });

    // ATTACKS
    this.anims.create({
      key: 'scratch_white',
      frames: this.anims.generateFrameNumbers(Sprites.clawWhite.key),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });
    this.anims.create({
      key: 'scratch_yellow',
      frames: this.anims.generateFrameNumbers(Sprites.clawYellow.key),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });
    this.anims.create({
      key: 'catnip_anim',
      frames: this.anims.generateFrameNumbers(Sprites.catnip.key),
      frameRate: 20,
      repeat: -1,
    });

    // EXP UP ITEMS
    this.anims.create({
      key: 'red',
      frames: this.anims.generateFrameNumbers(Sprites.expUp.key, {
        start: 0,
        end: 0,
      }),
      frameRate: 20,
      repeat: 0,
    });
    this.anims.create({
      key: 'blue',
      frames: this.anims.generateFrameNumbers(Sprites.expUp.key, {
        start: 1,
        end: 1,
      }),
      frameRate: 20,
      repeat: 0,
    });
    this.anims.create({
      key: 'yellow',
      frames: this.anims.generateFrameNumbers(Sprites.expUp.key, {
        start: 2,
        end: 2,
      }),
      frameRate: 20,
      repeat: 0,
    });
    this.anims.create({
      key: 'green',
      frames: this.anims.generateFrameNumbers(Sprites.expUp.key, {
        start: 3,
        end: 3,
      }),
      frameRate: 20,
      repeat: 0,
    });
  }
}

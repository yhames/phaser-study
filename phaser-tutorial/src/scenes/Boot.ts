import { Images, Scenes } from './scene.config';

export default class Boot extends Phaser.Scene {
  constructor() {
    super(Scenes.Boot);
  }

  preload() {
    this.load.image(Images.background1.key, Images.background1.path);
    this.load.image(Images.background2.key, Images.background2.path);
    this.load.image(Images.background3.key, Images.background3.path);
    this.load.image(Images.beam.key, Images.beam.path);
  }

  create() {
    this.scene.start(Scenes.Preloader);
  }
}

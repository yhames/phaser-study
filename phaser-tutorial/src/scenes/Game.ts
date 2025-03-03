import Phaser, { AUTO } from 'phaser';
import Boot from './Boot';
import Preloader from './Preloader';

const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: 1024,
  height: 768,
  backgroundColor: '#028af8',
  scene: [Boot, Preloader],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: process.env.DEBUG === 'true',
    },
  },
};

export default new Phaser.Game(config);

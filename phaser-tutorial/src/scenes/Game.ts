import Phaser, { AUTO } from 'phaser';
import Boot from './Boot';
import Preloader from './Preloader';
import PlayingScene from './PlayingScene';

export const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: 900,
  height: 600,
  backgroundColor: '#028af8',
  scene: [Boot, Preloader, PlayingScene],
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: process.env.DEBUG === 'true',
    },
  },
};

export const StartGame = (parent: string) =>
  new Phaser.Game({ ...config, parent });

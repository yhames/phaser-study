import Phaser from 'phaser';
import config from './Config';

export default (parent: string) => new Phaser.Game({ ...config, parent });

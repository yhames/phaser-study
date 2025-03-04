import Player from '../characters/Player';
import { setBackGround } from '../utils/BackgroundManager';
import { Audios, Images, Scenes } from './Constant';

export default class PlayingScene extends Phaser.Scene {
  private m_beamSound!: Phaser.Sound.BaseSound;
  private m_scratchSound!: Phaser.Sound.BaseSound;
  private m_hitMobSound!: Phaser.Sound.BaseSound;
  private m_growlSound!: Phaser.Sound.BaseSound;
  private m_explosionSound!: Phaser.Sound.BaseSound;
  private m_expUpSound!: Phaser.Sound.BaseSound;
  private m_hurtSound!: Phaser.Sound.BaseSound;
  private m_nextLevelSound!: Phaser.Sound.BaseSound;
  private m_gameOverSound!: Phaser.Sound.BaseSound;
  private m_gameClearSound!: Phaser.Sound.BaseSound;
  private m_pauseInSound!: Phaser.Sound.BaseSound;
  private m_pauseOutSound!: Phaser.Sound.BaseSound;
  private m_player!: Player;
  private m_background!: Phaser.GameObjects.TileSprite;

  constructor() {
    super(Scenes.PlayingScene);
  }
  create() {
    this.sound.pauseOnBlur = false;
    this.m_beamSound = this.sound.add(Audios.beam.key);
    this.m_scratchSound = this.sound.add(Audios.scratch.key);
    this.m_hitMobSound = this.sound.add(Audios.hitMob.key);
    this.m_growlSound = this.sound.add(Audios.growl.key);
    this.m_explosionSound = this.sound.add(Audios.explosion.key);
    this.m_expUpSound = this.sound.add(Audios.expUp.key);
    this.m_hurtSound = this.sound.add(Audios.hurt.key);
    this.m_nextLevelSound = this.sound.add(Audios.nextLevel.key);
    this.m_gameOverSound = this.sound.add(Audios.gameOver.key);
    this.m_gameClearSound = this.sound.add(Audios.gameClear.key);
    this.m_pauseInSound = this.sound.add(Audios.pauseIn.key);
    this.m_pauseOutSound = this.sound.add(Audios.pauseOut.key);

    // player를 m_player라는 멤버 변수로 추가합니다.
    this.m_player = new Player(this);

    // PlayingScene의 background를 설정합니다.
    this.m_background = setBackGround(this, Images.background1.key);
  }
}

import Frame from '../models/Frame';
import ScoreManager from './ScoreManager';
import RollButton from '../models/RollButton';

export default class GameManager {
  static frames: Frame[];
  static currentFrame: Frame;
  static generateRollButtons(): RollButton[] {
    let rolls = [];
    for (let i = 0; i < 11; i++) {
      let rollButton = new RollButton();
      rollButton.number = i;
      if (this.currentFrame) {
        if (this.currentFrame.rowNumber < 10) {
          if (rollButton.number + this.currentFrame.score > 10) {
            rollButton.disabled = true;
          }
        } else {
          if (
            this.currentFrame.getRolls().length === 1 &&
            !this.currentFrame.isStrike() &&
            rollButton.number + this.currentFrame.score > 10
          ) {
            rollButton.disabled = true;
          } else if (
            this.currentFrame.getRolls().length === 2 &&
            this.currentFrame.score < 10
          ) {
            rollButton.disabled = true;
          }
        }
      } else {
        rollButton.disabled = true;
      }

      rolls.push(rollButton);
    }
    return rolls;
  }

  static getEmptyFrames(): Frame[] {
    const frames: Frame[] = [];
    for (let i = 0; i < 10; i++) {
      const frame = new Frame();
      frame.rowNumber = i + 1;
      frames.push(frame);
    }
    return frames;
  }

  static initializeGame() {
    this.frames = this.getEmptyFrames();
    this.currentFrame = this.frames[0];
  }

  static getFrames() {
    return this.frames;
  }

  static calculateScore(): number {
    return ScoreManager.calculate(this.frames);
  }

  static roll(rollValue: number): Frame {
    let frame = this.frames.find((q) => !q.completed);
    frame.roll(rollValue);
    frame = this.frames.find((q) => !q.completed);
    this.currentFrame = frame;
    return frame;
  }
}

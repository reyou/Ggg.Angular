import { trigger } from '@angular/animations';
import { TranslationWidth } from '@angular/common';

export default class Frame {
  private rolls: number[];
  private spare: boolean = false;
  private strike: boolean = false;
  public rowNumber: number;

  public completed: boolean = false;
  score: any;
  extra: number = 0;
  constructor() {
    this.rolls = [];
    this.score = 0;
  }
  isSpare() {
    return this.spare;
  }
  isStrike() {
    return this.strike;
  }
  getRolls(): number[] {
    return this.rolls;
  }
  isFullPoints() {
    return this.score === 30;
  }
  roll(rollPoint: number) {
    if (rollPoint < 0 || rollPoint > 10) {
      throw new Error('Invalid roll point!');
    }
    if (this.rowNumber !== 10) {
      this.rollForFrame(rollPoint);
    } else {
      this.rollForLastFrame(rollPoint);
    }
  }
  rollForLastFrame(rollPoint: number) {
    if (this.rolls.length == 0) {
      this.rolls.push(rollPoint);
      if (rollPoint === 10) {
        this.strike = true;
      }
    } else if (this.rolls.length == 1) {
      this.rolls.push(rollPoint);
      if (!this.strike) {
        const firstRoll = this.rolls[0];
        if (firstRoll + rollPoint > 10) {
          throw new Error('Invalid second roll point!');
        }
        if (firstRoll + rollPoint === 10) {
          this.spare = true;
        } else {
          this.spare = false;
        }
      }
    } else if (this.rolls.length == 2) {
      if (this.strike || this.spare) {
        this.rolls.push(rollPoint);
      } else {
        throw new Error('Cannot make third throw if not strike or spare!');
      }
      this.completed = true;
    }
  }

  rollForFrame(rollPoint: number) {
    if (this.rolls.length == 0) {
      this.rolls.push(rollPoint);
      if (rollPoint === 10) {
        this.strike = true;
        this.completed = true;
      }
    } else {
      const firstRoll = this.rolls[0];
      if (firstRoll + rollPoint > 10) {
        throw new Error('Invalid second roll point!');
      }
      this.rolls.push(rollPoint);
      if (firstRoll + rollPoint === 10) {
        this.spare = true;
      }
      this.completed = true;
    }
  }
  getFirstRollScore() {
    if (this.rolls.length > 0) {
      return this.rolls[0];
    }
    return 0;
  }
  getBothRollScore() {
    if (this.rolls.length == 1) {
      return this.rolls[0];
    } else if (this.rolls.length > 1) {
      return this.rolls[0] + this.rolls[1];
    }
    return 0;
  }

  getRollsTotal(): any {
    let total = 0;
    for (let i = 0; i < this.rolls.length; i++) {
      total += this.rolls[i];
    }
    return total;
  }
  print() {
    console.log(JSON.stringify(this));
  }
}

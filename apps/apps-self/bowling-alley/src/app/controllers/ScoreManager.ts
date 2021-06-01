import Frame from '../models/Frame';

export default class ScoreManager {
  // tslint:disable-next-line: typedef
  public static calculate(frames: Frame[]) {
    for (let i = frames.length - 1; i >= 0; i--) {
      const frame = frames[i];

      frame.score = frame.getRollsTotal();
      if (frame.isStrike()) {
        if (frame.rowNumber < 10) {
          const nextFrame = frames[i + 1];
          frame.score += nextFrame.extra;
          if (nextFrame.isStrike()) {
            frame.score += 10;
            frame.extra = 10;
          } else {
            frame.score += nextFrame.getBothRollScore();
            frame.extra = nextFrame.getFirstRollScore();
          }
        } else {
          if (frame.isStrike()) {
            frame.extra = 10;
          }
        }
      } else if (frame.isSpare()) {
        if (frame.rowNumber < 10) {
          frame.score += frames[i + 1].getFirstRollScore();
        }
      }
    }

    const score = frames.map((frame) => frame.score).reduce((a, b) => a + b);
    return score;
  }

  // tslint:disable-next-line: typedef
  static printFrames(frames: Frame[]) {
    for (const frame of frames) {
      console.log(JSON.stringify(frame));
    }
  }

  // tslint:disable-next-line: typedef
  static printFrameRolls(frames: Frame[]) {
    for (const frame of frames) {
      console.log(frame.getRolls());
    }
  }
}

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import Frame from './models/Frame';
import ScoreManager from './controllers/ScoreManager';
import GameManager from './controllers/GameManager';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'bowling-alley'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('bowling-alley');
  });

  /* it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'bowling-alley app is running!'
    );
  }); */
  it('should draw table score perfect frames', () => {
    const frames = getPerfectFrames();
    ScoreManager.calculate(frames);
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.frames = frames;
    fixture.detectChanges();
  });

  it('should calculate score perfect frames', () => {
    const frames = getPerfectFrames();
    ScoreManager.printFrames(frames);
    const score = ScoreManager.calculate(frames);
    console.log('');
    ScoreManager.printFrames(frames);
    expect(score).toEqual(300);
  });

  it('should calculate score random frames', () => {
    const frames = getRandomFrames();
    ScoreManager.printFrames(frames);
    const score = ScoreManager.calculate(frames);
    console.log('');
    ScoreManager.printFrames(frames);
    expect(score).toBeLessThan(301);
  });

  it('should calculate score manually entered frames', () => {
    GameManager.initializeGame();
    GameManager.roll(9);
    GameManager.roll(1);
    GameManager.roll(10);
    GameManager.roll(10);
    GameManager.roll(10);
    GameManager.roll(10);
    GameManager.roll(10);
    GameManager.roll(10);
    GameManager.roll(10);
    GameManager.roll(10);
    GameManager.roll(8);
    GameManager.roll(2);
    GameManager.roll(10);

    const score = GameManager.calculateScore();
    expect(score).toEqual(268);
  });

  it('should calculate score with zero frames', () => {
    const frames = getZeroFrames();
    ScoreManager.printFrames(frames);
    const score = ScoreManager.calculate(frames);
    console.log('');
    ScoreManager.printFrames(frames);
    expect(score).toEqual(0);
  });
});

function getRandomFrames(): any {
  const frames: Frame[] = [];
  for (let i = 0; i < 10; i++) {
    const frame = new Frame();
    frame.rowNumber = i + 1;
    //  pick random from 0-10
    let random1 = getRandomNumber(0, 11);
    frame.roll(random1);

    // pick random from (10-random1,10)
    let random2 = getRandomNumber(0, 11 - random1);

    frame.roll(random2);
    if (i + 1 === 10) {
      if (random1 + random2 === 10) {
        random1 = 0;
        random2 = 0;
      }
      const random3 = getRandomNumber(0, 11 - random1 + random2);

      if (frame.isSpare() || frame.isStrike()) {
        frame.roll(random3);
      }
    }
    frames.push(frame);
  }
  return frames;
}

// tslint:disable-next-line: typedef
function getPerfectFrames() {
  const frames: Frame[] = [];
  for (let i = 0; i < 10; i++) {
    const frame = new Frame();
    frame.rowNumber = i + 1;
    frame.roll(10);
    if (i + 1 === 10) {
      frame.roll(10);
      frame.roll(10);
    }
    frames.push(frame);
  }
  return frames;
}

// tslint:disable-next-line: typedef
function getZeroFrames() {
  const frames: Frame[] = [];
  for (let i = 0; i < 10; i++) {
    const frame = new Frame();
    frame.rowNumber = i + 1;
    frame.roll(0);
    if (i + 1 === 10) {
      frame.roll(0);
    }
    frames.push(frame);
  }
  return frames;
}

// tslint:disable-next-line: typedef
function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

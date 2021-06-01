import { Component, OnInit } from '@angular/core';
import ScoreManager from './controllers/ScoreManager';
import GameManager from './controllers/GameManager';
import Frame from './models/Frame';
import RollButton from './models/RollButton';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'bowling-alley';
  rolls: RollButton[];
  frames: Frame[];
  currentFrame: Frame;
  totalScore: number = 0;

  ngOnInit() {
    GameManager.initializeGame();
    this.rolls = GameManager.generateRollButtons();
    this.frames = GameManager.getFrames();
    this.currentFrame = this.frames[0];
  }
  rollTheBall(rollValue) {
    this.currentFrame = GameManager.roll(rollValue);
    this.totalScore = GameManager.calculateScore();
    this.rolls = GameManager.generateRollButtons();
  }
  getCurrentFrameClass(currentIndex) {
    if (this.currentFrame) {
      if (currentIndex === this.currentFrame.rowNumber - 1) {
        return 'table-primary';
      }
    }
    return '';
  }
}

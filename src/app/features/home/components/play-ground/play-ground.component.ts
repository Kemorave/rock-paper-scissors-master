import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HandType } from '../../../../core/enums/hand_type';
import {
  getRandomHand,
  getHandByType,
} from '../../../../core/helper/player_hand_helper';
import { PlayResult } from '../../../../core/enums/play_result';
import { PlayHandComponent } from './components/play-hand/play-hand.component';
import { NgIf } from '@angular/common';
import {
  getLastGameSession,
  saveGameSession,
} from '../../../../core/helper/game_progress_helper';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css'],
  standalone: true,
  imports: [PlayHandComponent, NgIf],
})
export class PlayGroundComponent implements OnInit {
  constructor() {}

  lastSession = getLastGameSession();
  @Output() onScoreChange = new EventEmitter<number>();
  HandType = HandType;
  PlayResult = PlayResult;
  pickedHand?: HandType;
  houseHand?: HandType;
  score: number = this.lastSession?.score ?? 0;
  result?: PlayResult;
  resultText: string = '';
  onPickedHand(hand: HandType) {
    setTimeout(() => {
      this.pickedHand = hand;
    }, 250);
    setTimeout(() => {
      this.houseHand = getRandomHand().type;
      if (this.houseHand === this.pickedHand) {
        this.result = PlayResult.draw;
      } else {
        this.result = getHandByType(this.pickedHand!)!.canBeat(this.houseHand!)
          ? PlayResult.playerWin
          : PlayResult.houseWin;
        this.score += this.result === PlayResult.playerWin ? 1 : -1;
      }
      switch (+this.result) {
        case PlayResult.playerWin:
          this.resultText = 'YOU WIN';
          break;
        case PlayResult.houseWin:
          this.resultText = 'YOU LOSE';
          break;
        case PlayResult.draw:
          this.resultText = 'DRAW';
          break;
        default:
          break;
      }
      if (this.score <= 0) {
        this.score = 0;
      }
      this.onScoreChange.emit(this.score);
      saveGameSession({
        score: this.score,
        name: 'Guest',
      });
    }, 1200);
  }

  reset() {
    this.pickedHand = undefined;
    this.houseHand = undefined;
    this.result = undefined;
    this.resultText = '';
  }

  ngOnInit() {}
}

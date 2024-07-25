import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HandType } from '../../../../../../core/enums/hand_type';
import { NgIf } from '@angular/common';
import { WaveBackgroundComponent } from '../../../../../../core/components/wave-background/wave-background.component';

@Component({
  selector: 'app-play-hand',
  templateUrl: './play-hand.component.html',
  styleUrls: ['./play-hand.component.css'],
  standalone: true,
  imports: [NgIf, WaveBackgroundComponent],
})
export class PlayHandComponent implements OnInit {
  constructor() {}
  @Input() hand!: HandType;
  @Input() beate: boolean = false;

  ngOnInit() {}
  @Output() onPlay = new EventEmitter<HandType>();
  getHandIcon() {
    switch (this.hand) {
      case HandType.lizard:
        return 'images/icon-lizard.svg';
      case HandType.paper:
        return 'images/icon-paper.svg';
      case HandType.rock:
        return 'images/icon-rock.svg';
      case HandType.scissors:
        return 'images/icon-scissors.svg';
      case HandType.spock:
        return 'images/icon-spock.svg';
    }
  }
  getHandColor() {
    switch (this.hand) {
      case HandType.lizard:
        return 'border-lizard-primary';
      case HandType.paper:
        return 'border-paper-primary';
      case HandType.rock:
        return 'border-rock-primary';
      case HandType.scissors:
        return 'border-scissors-primary';
      case HandType.spock:
        return 'border-spock-primary';
    }
  }
  getHandSecondaryColor() {
    switch (this.hand) {
      case HandType.lizard:
        return 'border-lizard-secondary';
      case HandType.paper:
        return 'border-paper-secondary';
      case HandType.rock:
        return 'border-rock-secondary';
      case HandType.scissors:
        return 'border-scissors-secondary';
      case HandType.spock:
        return 'border-spock-secondary';
    }
  }
  getShadowColor() {
    switch (this.hand) {
      case HandType.lizard:
        return 'shadow-lizard-primary';
      case HandType.paper:
        return 'shadow-paper-primary';
      case HandType.rock:
        return 'shadow-rock-primary';
      case HandType.scissors:
        return 'shadow-scissors-primary';
      case HandType.spock:
        return 'shadow-spock-primary';
    }
  }
}

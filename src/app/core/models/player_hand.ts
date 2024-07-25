import { HandType } from '../enums/hand_type';

export class PlayerHand {
  type!: HandType;
  beats!: HandType[];
  constructor(parameters: { type: HandType; beats: HandType[] }) {
    this.type = parameters.type;
    this.beats = parameters.beats;
  }
  canBeat(hand: HandType): boolean {
    return this.beats.includes(hand);
  }
}

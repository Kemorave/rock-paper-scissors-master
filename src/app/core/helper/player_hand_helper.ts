import { HandType } from '../enums/hand_type';
import { PlayerHand } from '../models/player_hand';

export const getAllPossiblePlayerHands = (): PlayerHand[] => {
  return [
    new PlayerHand({
      type: HandType.rock,
      beats: [HandType.scissors, HandType.lizard],
    }),
    new PlayerHand({
      type: HandType.paper,
      beats: [HandType.rock, HandType.spock],
    }),
    new PlayerHand({
      type: HandType.scissors,
      beats: [HandType.paper, HandType.lizard],
    }),
    new PlayerHand({
      type: HandType.lizard,
      beats: [HandType.spock, HandType.rock],
    }),
    new PlayerHand({
      type: HandType.spock,
      beats: [HandType.scissors, HandType.paper],
    }),
  ];
};

export const getHandByType = (type: HandType): PlayerHand => {
  return getAllPossiblePlayerHands().find((hand) => hand.type === type)!;
};

export const getHandByTypeAndBeat = (
  type: HandType,
  beat: HandType
): PlayerHand => {
  return getAllPossiblePlayerHands().find(
    (hand) => hand.type === type && hand.beats.includes(beat)
  )!;
};

export const getRandomHand = (): PlayerHand => {
  
    let arr= getAllPossiblePlayerHands();
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  
};

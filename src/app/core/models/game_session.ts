export class GameSession {
  score: number;
  name: string;
  constructor(parameters: { score: number; name: string }) {
    this.score = parameters.score;
    this.name = parameters.name;
  }
}

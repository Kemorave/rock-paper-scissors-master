import { GameSession } from '../models/game_session';

export const saveGameSession = (gameSession: GameSession) => {
  localStorage.setItem('gameSessions', JSON.stringify(gameSession));
};

export const getLastGameSession = (): GameSession | null | undefined => {
  return JSON.parse(localStorage.getItem('gameSessions') || '{}');
};

export const clearGameSessions = () => {
  localStorage.removeItem('gameSessions');
};

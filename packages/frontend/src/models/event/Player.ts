import type { Player } from '../player/Player';

export interface PlayerModel {
  id?: number | null;
  username: string;
  email?: string | null;
}

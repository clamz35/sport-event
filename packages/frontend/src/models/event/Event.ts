import type { Player } from '../player/Player';

export interface EventModel {
  id?: number | null;
  name: string;
  dateBegin: Date;
  dateEnd: Date;
  description?: string | null;
  address?: string | null;
  players: Player[];
}

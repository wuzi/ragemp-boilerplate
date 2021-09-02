import i18next from 'i18next';
import { RageModule } from '../../types/events.interface';

export class ChatModule implements RageModule {
  public playerChat(player: PlayerMp, message: string): void {
    mp.players.broadcast(i18next.t('CHAT.SAY', { name: player.name, message }));
  }
}

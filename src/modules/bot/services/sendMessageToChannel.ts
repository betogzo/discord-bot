import client from '@bot/index';
import { TextChannel } from 'discord.js';

//Serviço que envia uma mensagem customizada para um canal específico
export default function sendMessageToChannel(
  channelId: string,
  message: string
): void {
  const channel = client.channels.cache.get(channelId) as TextChannel;

  if (!message || message.trim() === '') {
    throw new Error('O corpo da mensagem não pode ser vazio.');
  }

  if (!channel) throw new Error('O ID do canal informado é inválido.');

  channel.send(message.trim());
}

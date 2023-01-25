//Comando para pingar IPs

import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, Client, TextChannel } from 'discord.js';
import DiscordRoles from '../config/DiscordRoles';
import userHasRole from '../utils/userHasRole';
const ping = require('net-ping');

export const data = new SlashCommandBuilder()
  .setName('ping')
  .setDescription(`Pinga um IP. Restrito aos cargos: ${DiscordRoles.DEV}.`)
  .addStringOption((option: any) =>
    option
      .setName('target')
      .setDescription('IP que deseja pingar.')
      .setRequired(true)
  );

export async function execute(interaction: CommandInteraction, client: Client) {
  //Early return se a interação não tiver ID do canal
  if (!interaction?.channelId) return;

  //Early return se o canal não existir ou se não for canal de texto
  const channel = (await client.channels.fetch(
    interaction.channelId
  )) as TextChannel;
  if (!channel || channel.type !== 'GUILD_TEXT') return;

  if (!userHasRole(interaction, DiscordRoles.DEV)) {
    return interaction.reply(
      'Você não tem permissão para executar este comando.'
    );
  }

  //Capturando o target a ser pingado pelo comando do usuario
  const target = interaction.options.getString('target')!.trim();

  const pingSessionOptions = {
    retries: 1,
    timeout: 2000,
  };

  const session = ping.createSession(pingSessionOptions);

  await interaction.deferReply();

  session.pingHost(target, async function (error: Error, target: string) {
    if (error) {
      return await interaction.editReply({
        content: `Erro ao pingar ${target} (${error.toString()})`,
      });
    } else {
      return await interaction.editReply({
        content: `O IP ${target} está respondendo!`,
      });
    }
  });
}

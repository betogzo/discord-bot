//Serviço para verificar se usuário tem um determinado role/cargo (discord)

import { GuildMemberRoleManager, Interaction } from 'discord.js';

export default function userHasHole(
  interaction: Interaction,
  role: string
): boolean {
  const userRoles = (interaction.member!.roles as GuildMemberRoleManager).cache;
  return userRoles.some((userRole) => userRole.name === role);
}

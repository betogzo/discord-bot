import { Client, TextChannel } from 'discord.js';
import config from '@bot/config';
import * as commandModules from '@bot/commands';

//Importando todos os 'slash commands'
const commands = Object(commandModules);

//Criando o cliente do BOT
const client = new Client({
  intents: ['GUILDS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES'],
});

//Função executada quando o BOT estiver pronto
client.once('ready', () => {
  console.log('BOT pronto.');
});

//Função executada sempre que houver uma interação dos usuários
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  //Extraindo o comando digitado pelo usuário (as string) do objeto 'interaction'
  const { commandName } = interaction;

  //Executa o comando correspondente ao commandName
  commands[commandName].execute(interaction, client);
});

client.login(config.DISCORD_TOKEN);

export default client;

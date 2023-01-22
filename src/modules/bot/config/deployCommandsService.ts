/* 
Serviço criado para configurar e fazer o deploy dos 'slash commands' do BOT (contidos na pasta commands).
Este arquivo precisa ser transpilado e executado separadamente, verifique script no package.json
*/

import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import config from '@bot/config';
import * as commandModules from '@bot/commands';

type Command = {
  data: any;
};

const { DISCORD_TOKEN, CLIENT_ID, GUILD_ID } = config;

const commands = [];

//Adicionando à lista de comandos nome e descrição de cada module/comando/slash-command
for (const module of Object.values<Command>(commandModules)) {
  commands.push(module.data);
}

const rest = new REST({ version: '9' }).setToken(DISCORD_TOKEN);

rest
  .put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
    body: commands,
  })
  .then(() => console.log('Comandos da aplicação registrados com sucesso.'))
  .catch(console.error);

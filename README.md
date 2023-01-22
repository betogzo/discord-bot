# discord-bot
Originalmente criado para atender as necessidades da empresa onde trabalho, removi todas as funções específicas como execuções de rotinas automáticas internas etc e mantive como template.

Está usando a versão 13 do Discord.js, eu não me dei ao trabalho de migrar para a v14 porque eles mudaram muitas coisas e basicamente quebra a aplicação inteira.

Você pode clonar/baixar este repositório e seguir os passos abaixo:

Instale as dependências do projeto usando seu Terminal preferido:


    npm install
    
Substitua as credenciais do Discord no arquivo .env pelas suas:

    https://discord.com/developers/applications

Na pasta src/modules/bot/commands é onde você irá escrever seus slash-commands do Discord. Deixei um comando de exemplo (ping). Não se esqueça de exportar o slash-command que criou no arquivo src/modules/bot/commands/index.ts

Faça o build pela primeira vez:

    npm run build

Adicione seus slash-commands ao BOT (deverá ser executado sempre que adicionar novos comandos):

    npm run deploy:slashcommands


O bot roda junto com um servidor HTTP criado com o Express.js e tem atualmente uma rota para receber uma mensagem personalizada via POST e enviar para um canal específico do Discord.

Também deixei uma função para verificar o cargo (Discord) do usuário que está tentando executar os slash-commands, para fins de permissão. 

Por fim, rode a aplicação para testar:

    npm run dev

Para deploy configure para o seu ambiente, eu deixei no package.json o script que eu estou usando (npm start) com o PM2.



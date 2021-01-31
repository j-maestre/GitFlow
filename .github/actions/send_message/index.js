const core = require("@actions/core");
const TelegramBot = require("node-telegram-bot-api");
// const github = require("@actions/github");

const token = core.getInput("token_bot"); //Token que le pasamos en el flow.yml como id del bot
const bot = new TelegramBot(token, { polling: false });
var chat_Id = core.getInput("chatId"); //Token del grupo que le pasamos
const name = core.getInput("name");
const commit = github.context.payload;
console.log("COOOMIIITTT");
console.log(commit);

try {
  bot.sendMessage(
    chat_Id,
    `Workflow ejecutado correctamente tras el último commit. Saludos ,${name}` //:\n\nCreadoBy:${commit.head_commit.author.name}\Avatar: ${commit.sender.avatar_url}\Url: ${commit.head_commit.url}\Mensage: ${commit.head_commit.message}`
  );
} catch (error) {
  core.setFailed(error.message);
}
core.setOutput("message", "Mensaje enviado");

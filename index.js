const Discord = require("discord.js");
const client = new Discord.Client();
client.login(BOT_TOKEN);

client.on("ready", () => {
  console.log("Bot on");
  client.user
    .setPresence({
      activity: {
        name: `Criador/Programador: ${
          client.users.cache.get("403654320664477720").tag
        }`
      }
    })
    .catch(e => console.log(e));
  att();
});

let cargoInfo = "693475907914170409";
let cargoAdm = "693476137124364348";
let cargoVest = "693476099463708755";

let cargoIngles = "693506659875815495";
let cargoEspanhol = "693506804528709714";

let cargo1 = "694954979659743332";
let cargo2 = "697247704354521148";
let cargo3 = "697247810927722600";

let cargoMembro = "693477248359071765";

let idMsg = "693479898127532062";

let idGuild = "693452265956180109";

client.on("raw", async e => {
  if (e.t == "MESSAGE_REACTION_ADD") {
    let member = client.guilds.cache.get(e.d.guild_id).members.cache.get(e.d.user_id);
    if (e.d.message_id == idMsg) {
      switch (e.d.emoji.name) {
        case "💻": {
          member.addRole(cargoInfo);
          member.addRole(cargoMembro);
          break;
        }
        case "📊": {
          member.addRole(cargoAdm);
          member.addRole(cargoMembro);
          break;
        }
        case "👚": {
          member.addRole(cargoVest);
          member.addRole(cargoMembro);
          break;
        }
      }
    } else if (e.d.message_id == "693508433344987196") {
      let member = client.guilds.cache.get(e.d.guild_id).members.cache.get(e.d.user_id);
      switch (e.d.emoji.name) {
        case "🇺🇸": {
          member.addRole(cargoIngles);
          break;
        }
        case "🇪🇸": {
          member.addRole(cargoEspanhol);
          break;
        }
      }
    } else if (e.d.message_id == "697261271552360538") {
      let member = client.guilds.cache.get(e.d.guild_id).members.cache.get(e.d.user_id);
      console.log(e.d.emoji.name);
      switch (e.d.emoji.name) {
        case "1️⃣": {
          member.addRole(cargo1);
          break;
        }
        case "2️⃣": {
          member.addRole(cargo2);
          break;
        }
        case "3️⃣": {
          member.addRole(cargo3);
          break;
        }
      }
    }
  }
});

client.on("guildMemberAdd", member => {
  return att();
});

client.on("guildMemberRemove", member => {
  return att();
});

async function att(){
  let info = 0;
  let adm = 0;
  let vest = 0;
  let bots = 0;

  client.guilds.cache.get(idGuild).members.cache.map(m => {
    if (m.user.bot) {
      bots++;
    }
  });
  
  client.guilds.cache.get(idGuild).members.cache.map(m => {
  if(m.user.bot) return;
    if (m.roles.cache.has(cargoInfo)) {
      info++;
    } else if (m.roles.cache.has(cargoAdm)) {
      adm++;
    } else if (m.roles.cache.has(cargoVest)) {
      vest++;
    }
  });
  
  bots += 1;
  
  let usu = (client.guilds.cache.get(idGuild).memberCount - bots);

  client.guilds.cache
    .get(idGuild)
    .channels.cache.get("697806708226916352")
    .setName("👤| Usuários: " + usu);
  client.guilds.cache
    .get(idGuild)
    .channels.cache.get("697806938683080765")
    .setName("💻| Info: " + info);
  client.guilds.cache
    .get(idGuild)
    .channels.cache.get("697807011160522772")
    .setName("📊| Adm: " + adm);
  client.guilds.cache
    .get(idGuild)
    .channels.cache.get("697807072255016960")
    .setName("👚| Vest: " + vest);
}

<div align="center">
  
<!--   <img src="https://cdn.discordapp.com/attachments/893068961116225567/943053270375608360/FB_IMG_1642503622583.jpg" width="75%"></img>  -->
  
  ![GitHub release (latest by date)](https://img.shields.io/github/v/release/MGalaCyber/Discord.js-v14-Handler-Template?style=for-the-badge)
  ![GitHub all releases](https://img.shields.io/github/downloads/MGalaCyber/Discord.js-v14-Handler-Template/total?style=for-the-badge)
  ![Discord](https://img.shields.io/discord/826406117658853417?logo=discord&style=for-the-badge)
  ![GitHub top language](https://img.shields.io/github/languages/top/MGalaCyber/Discord.js-v14-Handler-Template?logo=javascript&style=for-the-badge)
  ![GitHub forks](https://img.shields.io/github/forks/MGalaCyber/Discord.js-v14-Handler-Template?logo=github&style=for-the-badge)
  ![GitHub contributors](https://img.shields.io/github/contributors/MGalaCyber/Discord.js-v14-Handler-Template?logo=github&style=for-the-badge)
  ![GitHub issues](https://img.shields.io/github/issues/MGalaCyber/Discord.js-v14-Handler-Template?logo=github&style=for-the-badge)
  ![GitHub pull requests](https://img.shields.io/github/issues-pr/MGalaCyber/Discord.js-v14-Handler-Template?logo=github&style=for-the-badge)
  ![Watching](https://img.shields.io/github/watchers/MGalaCyber/Discord.js-v14-Handler-Template?style=for-the-badge)
  ![Stars](https://img.shields.io/github/stars/MGalaCyber/Discord.js-v14-Handler-Template?style=for-the-badge)
  ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/MGalaCyber/Discord.js-v14-Handler-Template?style=for-the-badge)
  
</div>

---------
<p align="center">
  <a href="https://discord.gg/VzGNhtmmfB" target="_blank">
      <img src="https://discordapp.com/api/guilds/826406117658853417/widget.png?style=banner2" alt="Discord server">
  </a>
</p>

<p align="center">
  <a href="https://trakteer.id/manggala1274" target="_blank">
      <img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-green-1.png" height="40" style="border:0px;height:40px;" alt="Trakteer Saya">
  </a>
</p>

---------
# Discord.js v14 Handler Template
### I suggest downloading the template handler in the [Releases](https://github.com/MGalaCyber/Discord.js-v14-Handler-Template/releases/latest) column, to avoid bugs

---------
## ⚙ Configuration
- ⚠ Never share your tokens or api keys publicly
- Create and Modify `.env` and fill out the values:
```env
TOKEN="discord-bot-token"
MONGO_URI="your-mongoose-databases"
```
- And then config other variables in `settings/config.json`

---------

- Message Command Structures Example
```js
//=====================================| Import the Module |=====================================\\

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require('discord.js');
const { errorCmdLogs1 } = require(`${process.cwd()}/Functions/errorCmdLogs.js`);
const { author, version } = require(`${process.cwd()}/package.json`);
const Settings = require(`${process.cwd()}/Settings/settings.json`);
const Config = require(`${process.cwd()}/Settings/config.json`);
const Emoji = require(`${process.cwd()}/Settings/emojis.json`);
const Embed = require(`${process.cwd()}/Settings/embed.json`);

//=====================================| Code |=====================================\\

module.exports = {
    name: '', // Input the Name of the command
    aliases: [], // Input the Aliases of the command
    cooldown: 15, // Input the Cooldowns of the command
    category: '', // Input the Category of the command
    description: '', // Input the type of the command
    //========| Options Settings |========\\
    ownerOnly: false, // Choose true/false. Can only be used by owners registered with bots who can use this command
    guildOnly: false, // Choose true/false. Can only be used on servers registered by bots that can use this command
    nsfwOnly: false, // Choose true/false. Can only be used on nsfw channels that can use this command
    voiceOnly: false, // Choose true/false. Can only be used on nsfw channels that can use this command
    toggleOff: false, // Choose true/false. Can only be used on nsfw channels that can use this command
    maintenanceCmd: false, // Choose true/false. Can't be used on nsfw channels that can use this command
    botPerms: [], // Input the bot permissions of the command
    userPerms: [], // Input the user permissions of the command
    usage: '', // Fill the main name command

    async execute(message, args, client, prefix) {
        try {
        // Fill your code here
        
        } catch (error) {
            errorCmdLogs1(client, message, error);
        }
    }
}

/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\               Handlers Coded by GalaXd#9165                 \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */
```
- Slash Command Structures Example
```js
//=====================================| Import the Module |=====================================\

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require('discord.js');
const { errorCmdLogs2 } = require(`${process.cwd()}/Functions/errorCmdLogs.js`);
const { author, version } = require(`${process.cwd()}/package.json`);
const Settings = require(`${process.cwd()}/Settings/settings.json`);
const Config = require(`${process.cwd()}/Settings/config.json`);
const Emoji = require(`${process.cwd()}/Settings/emojis.json`);
const Embed = require(`${process.cwd()}/Settings/embed.json`);

//=====================================| Code |=====================================\

module.exports = {
    name: '', // Input the Name of the command
    cooldown: 15, // Input the Cooldowns of the command
    category: '', // Input the Category of the command
    description: '', // Input the type of the command
    //========| Options Settings |========\\
    ownerOnly: false, // Choose true/false. Can only be used by owners registered with bots who can use this command
    guildOnly: false, // Choose true/false. Can only be used on servers registered by bots that can use this command
    nsfwOnly: false, // Choose true/false. Can only be used on nsfw channels that can use this command
    voiceOnly: false, // Choose true/false. Can only be used on nsfw channels that can use this command
    toggleOff: false, // Choose true/false. Can only be used on nsfw channels that can use this command
    maintenanceCmd: false, // Choose true/false. Can't be used on nsfw channels that can use this command
    botPerms: [], // Input the bot permissions of the command
    userPerms: [], // Input the user permissions of the command
    options: [],

    async execute(client, interaction, args, prefix) {
        try {
        // Fill your code here

        } catch (error) {
            errorCmdLogs2(client, interaction, error);
        }
    },
};

/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\               Handlers Coded by GalaXd#9165                 \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */
```
- Event Structures Example
```js
//=====================================| Import the Module |=====================================\\

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require('discord.js');
const { author, version } = require(`${process.cwd()}/package.json`);
const Settings = require(`${process.cwd()}/Settings/settings.json`);
const Config = require(`${process.cwd()}/Settings/config.json`);
const Emoji = require(`${process.cwd()}/Settings/emojis.json`);
const Embed = require(`${process.cwd()}/Settings/embed.json`);

//=====================================| Code |=====================================\\

module.exports = async (client) => {
  // Fill your code here

};

/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\               Handlers Coded by GalaXd#9165                 \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */
```
- Handler Structures Example
```js
//=====================================| Import the Module |=====================================\\

const { readdirSync } = require('fs');
require('colors');

// ========================================| Code |======================================= \\

module.exports = async (client) => {
  // Fill your code here

};

/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\               Handlers Coded by GalaXd#9165                 \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */
```

---------
# 💖 Support
- [Saweria](https://saweria.co/Galaxy1274)
- [Ko-Fi](https://ko-fi.com/MGalaCyber1274)
- [Trakter](https://trakteer.id/manggala1274)

---------
# 💝 Credit
If consider using this Template, make sure to credit me!
### [MGalaCyber](https://github.com/MGalaCyber) | [Website](https://galacyber.vercel.app) | [Discord](https://discord.gg/VzGNhtmmfB)

---------
# 📜 Licence
> ![GitHub](https://img.shields.io/github/license/MGalaCyber/Discord.js-v14-Handler-Template?style=for-the-badge)

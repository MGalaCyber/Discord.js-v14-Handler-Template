//=====================================| Import the Module |=====================================\

const { EmbedBuilder, InteractionCreate, InteractionType, Collection, PermissionsBitField, ChannelType } = require('discord.js');
const { errorCmdLogsInt } = require(`../../Structures/Functions/errorCmdLogs.js`);
const { onCoolDownInt } = require(`../../Structures/Functions/onCoolDown.js`);
const Settings = require(`../../Structures/Settings/settings.json`);
const Config = require(`../../Structures/Settings/config.json`);
const Emoji = require(`../../Structures/Settings/emojis.json`);
const Embed = require(`../../Structures/Settings/embed.json`);
const { author, version } = require(`../../package.json`);
const cooldown = new Collection();
const prefix = '/';

//=====================================| Code |=====================================\

module.exports = {
    name: 'interactionCreate',

    /**
     * 
     * @param {Client} client 
     * @param {InteractionCreate} interaction 
     */
    
    async execute(interaction, client) {
        try {
            //=====================================| Command Handling |=====================================\\
            if (interaction.isModalSubmit()) {
                if (!interaction.guild) {
                    return interaction.reply({
                        ephemeral: true,
                        content: `${Emoji.Message.ERROR} You do not have to use this modal in DMs!`
                    })
                }
                if (interaction.user.bot) return;
                
                if (interaction.type !== InteractionType.ModalSubmit) return;
                const command = client.modals.get(interaction.customId);
                if (!command) {
                    return interaction.reply({
                        ephemeral: true,
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setTitle(`${Emoji.Message.ERROR} Failed To Execute Modals!`)
                                .setDescription(`I cant execute the modals for you.`)
                                .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                        ]
                    })
                }
    
            // ====================< Start Command >=================== \\
                try {
                    command.execute(client, interaction, prefix);
                } catch (error) {
                    console.log(error);
                    return interaction.reply({
                        ephemeral: true,
                        embeds: [
                            new EmbedBuilder()
                                .setColor(Embed.Colors.wrongcolor)
                                .setDescription(`${Emoji.Message.ERROR} There was an error trying to execute that modal!`)
                                .setDescription(`There was an error trying to execute that modal.`)
                                .addField('Error', `\`\`\`${error}\`\`\``)
                                .setFooter({ text: `${Embed.footertext} · v${version}`, iconURL: client.user.displayAvatarURL() })
                        ]
                    })
                }
            }
    
        } catch (error) {
            errorCmdLogsInt(client, interaction, error);
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
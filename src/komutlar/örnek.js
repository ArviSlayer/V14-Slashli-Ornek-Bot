const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("örnek")
    .setDescription("Bu Altyapı ArviS#0011 Tarafından Yapılmıştır"),
    run: async (client, interaction) => {
      interaction.reply(`Bu Altyapı **ArviS#0011** Tarafından Yapılmıştır`)
    }
 };










 //ArviS#0011
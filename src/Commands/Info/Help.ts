import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
	name: 'help',
	description: 'Show this help desk',
	aliases: ['h'],
	usage: '',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const embed = new MessageEmbed()
			.setTitle('Kogasa Help Desk')
			.setImage(`https://cdn.upload.systems/uploads/jIwkxukV.png`)
			.setDescription(
				`Hello there! I'm Kogasa here~! Maids and Helpers in this server! ☂️\n\nLooking for Command List? Oh, Here is it!\n\nYou can see Full Command List at\n[gifaldyazka.is-a.dev/kogasa-dscbot/p/commands](https://gifaldyazka.is-a.dev/kogasa-dscbot/p/commands)!`
			)
			.setThumbnail(message.client.user.displayAvatarURL({ size: 512 }))
			.setColor('PURPLE')
			.setFooter(
				`${message.author.tag}`,
				message.author.displayAvatarURL({ dynamic: true })
			)
			.setTimestamp();

		message.channel.send({ embeds: [embed] });
	},
};

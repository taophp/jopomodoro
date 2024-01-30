import joplin from 'api';
import { SettingItemType } from 'api/types';

joplin.plugins.register({
	onStart: async function() {
		const panel = await joplin.views.panels.create('pom_1');
		await joplin.views.panels.setHtml(panel, `
			<h1>🍅</h1>
			<div id="timer">
				<span id="running">00:00</span><br>
				<span id="length">00:00</span>
			</div>
			<div id="controls">
				<button title="(Re)Start pomodoro">▶️</button>
				<button title="Suspend">⏸️</button>
				<button title="Reset timer">🔁</button>
				<button title="Short pause">⏹️</button>
				<button title="Long pause">⏏️</button>
			</div>
		`);

		await joplin.settings.registerSection('settings.joPomodoro', {
			label: 'JoPomodoro',
			iconName: 'fas fa-apple-alt'
		});
		await joplin.settings.registerSettings({
			"pom_duration": {
				label: "How long last a Pomodoro in minutes",
				value: 52,
				type: SettingItemType.Int,
				public: true,
				section: 'settings.joPomodoro',
			},
			"shortpause_duration": {
				label: "How long last a short pause in minutes",
				value: 17,
				type: SettingItemType.Int,
				public: true,
				section: 'settings.joPomodoro',
			},
			"longpause_duration": {
				label: "How long last a long pause in minutes",
				value: 90,
				type: SettingItemType.Int,
				public: true,
				section: 'settings.joPomodoro',
			},
			"how_many_pom_before_long": {
				label: "How many pomodoro before a long pause",
				value: 4,
				type: SettingItemType.Int,
				public: true,
				section: 'settings.joPomodoro',
			},
		})
	},
});

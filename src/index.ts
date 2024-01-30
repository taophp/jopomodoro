import joplin from 'api';

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
	},
});

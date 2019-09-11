// This is the one and only jay's configuration file, aka the
// place where you load and configure your plugins.

// More information:
// https://github.com/nikersify/jay/tree/master/doc/plugins.md (TODO)

module.exports = jay => {
	// Example plugin:
	/*
	jay.on('line', (line, stop) => {
		return line.replace('cats are ugly', 'cats are pretty')
	})
	*/

	// Try uncommenting the above lines, and entering `'cats are
	// ugly'` into a new jay instance - you should see a
	// non-blasphemic version of the sentence.

	// ================
	// Built-in plugins
	// ================

	// You can disable any of the built-in plugins by simply
	// commenting out the line where they're required.

	// Show node, jay & npm versions on startup
	require('jay-repl/dist/plugin/hello')(jay)

	// Display help information on startup and define jay.help()
	require('jay-repl/dist/plugin/help')(jay)

	// =========
	// Rendering

	// Highlight input
	require('jay-repl/dist/plugin/highlight')(jay)

	// Prepend prompt character
	require('jay-repl/dist/plugin/ps1')(jay)

	// ==========
	// Evaluation

	// Add globals like `console`, `global`, `Promise`, `_`, etc.
	require('jay-repl/dist/plugin/globals')(jay)

	// Process npm-required packages
	require('jay-repl/dist/plugin/smart-require')(jay)

	// Wrap input with an async iife to support top level await
	require('jay-repl/dist/plugin/wrap-await')(jay)

	// Evaluate input
	require('jay-repl/dist/plugin/evaluate')(jay)

	// ============
	// Key handling

	// Standard ctrl+letter bindings
	require('jay-repl/dist/plugin/ctrl')(jay)

	// Add/remove pair characters, e.g. entering `"` outputs
	// `"|"` where `|` is the position of the cursor. Pressing
	// backspace removes the whole pair.
	require('jay-repl/dist/plugin/pairs')(jay)

	// Handle enter key properly
	require('jay-repl/dist/plugin/return')(jay)

	// Pass all keys not handled previously in plugins to
	// `readline`
	require('jay-repl/dist/plugin/readline-input')(jay)
}
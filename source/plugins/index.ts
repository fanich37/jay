import {Jay} from '../types'

import evaluatePlugin from './evaluate'
import globalsPlugin from './globals'
import highlightPlugin from './highlight'
import ps1Plugin from './ps1'
import quitPlugin from './quit'
import readlineInputPlugin from './readline-input'
import returnPlugin from './return'
import smartRequirePlugin from './smart-require'
import wrapAwaitPlugin from './wrap-await'

export default (jay: Jay) => {
	// Rendering
	// =========

	// Highlight input
	highlightPlugin(jay)

	// Prepend prompt character
	ps1Plugin(jay)

	// Evaluation
	// ==========

	// Add globals like `console`, `global`, `Promise`, `_`, etc.
	globalsPlugin(jay)

	// Process npm-required packages
	smartRequirePlugin(jay)

	// Wrap input with an async iife to support top level await
	wrapAwaitPlugin(jay)

	// Evaluate input
	evaluatePlugin(jay)

	// Key handling
	// ============

	// Quit bindings
	quitPlugin(jay)

	// Handle enter key properly
	returnPlugin(jay)

	// Pass all keys not handled previously in plugins to
	// `readline`
	readlineInputPlugin(jay)
}
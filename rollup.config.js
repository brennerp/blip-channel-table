import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import sass from 'rollup-plugin-sass';
import json from 'rollup-plugin-json';
import svg from 'rollup-plugin-svg';
import url from 'rollup-plugin-url';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	plugins: [
		json({
			// All JSON files will be parsed by default,
			// but you can also specifically include/exclude files
			include: [ 'src/**' ],
			exclude: [ 'node_modules/**' ],

			// for tree-shaking, properties will be declared as
			// variables, using either `var` or `const`
			preferConst: true, // Default: false

			// specify indentation for the generated default export —
			// defaults to '\t'
			indent: '  ',

			// ignores indent and generates the smallest code
			compact: true, // Default: false

			// generate a named export for every property of the JSON object
			namedExports: false // Default: true
		}),
		svelte({
			// opt in to v3 behaviour today
			skipIntroByDefault: true,
			nestedTransitions: true,

			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/bundle.css');
			},
		}),
		sass({
			insert: true,
			include: '**/*.scss',
			exclude: [],
			options: {
				importer( url /*, prev */ ) {
					// E.g. @import '~ckeditor5-theme-lark/theme/theme.scss';
					// See https://github.com/jtangelder/sass-loader#imports
					if ( url.startsWith( '~' ) ) {
						const path = '/node_modules/' + url.slice( 1 );

						return {
							file: path
						};
					}
				}
			}
		}),
		svg(),
		url({
			limit: 10 * 1024, // inline files < 10k, copy files > 10k
			include: ["**/*.png"], // defaults to .svg, .png, .jpg and .gif files
			emitFiles: true // defaults to true
		}),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve(),
		commonjs(),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	]
};

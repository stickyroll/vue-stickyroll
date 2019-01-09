import babel from "rollup-plugin-babel";
import css from "rollup-plugin-css-only";
import vue from "rollup-plugin-vue";
import pkg from "./package.json";

export default [
	{
		input: "src/index.vue",
		external: [
			...Object.keys(pkg.dependencies || {}),
			...Object.keys(pkg.devDependencies || {}),
			...Object.keys(pkg.peerDependencies || {})
		],
		output: [
			{
				file: `dist/${pkg.main}`,
				format: "cjs"
			},
			{
				file: pkg.module,
				format: "es"
			}
		],
		plugins: [babel(), css(), vue({ css: false })]
	},
	{
		input: "src/usm.js",
		external: [
			...Object.keys(pkg.dependencies || {}),
			...Object.keys(pkg.devDependencies || {}),
			...Object.keys(pkg.peerDependencies || {})
		],
		output: [
			{
				format: 'iife',
				file: `dist/usm/${pkg.main}`
			},
		],
		plugins: [babel(), css(), vue({ css: false })]
	},
	{
		input: "src/index.vue",
		external: [
			...Object.keys(pkg.dependencies || {}),
			...Object.keys(pkg.devDependencies || {}),
			...Object.keys(pkg.peerDependencies || {})
		],
		output: {
			format: 'cjs',
			file: `dist/ssr/${pkg.main}`
		},
			plugins: [babel(), css(), vue({ css: false,  template: { optimizeSSR: true}})]
	}
];

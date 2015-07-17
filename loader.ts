/// ES6 Loader Source Info
interface ModuleSource {
	source: string;
}

declare module System {
	export function normalize(name: string): string;
}

let jadeVirtualdomPath = System.normalize('jade-virtualdom');

export function translate(load: ModuleSource) {
	return `
		import jadeVirtualdom from '${jadeVirtualdomPath}';
		export default let template = jadeVirtualdom(${JSON.stringify(load.source)});
	`;
}
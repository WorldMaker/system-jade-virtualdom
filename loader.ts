/// ES6 Loader Source Info
interface ModuleSource {
	source: string;
}

declare module System {
	export function normalize(name: string): Promise<string>;
}

let normalPromise = System.normalize('jade-virtualdom');

export function translate(load: ModuleSource) {
	return normalPromise.then(jadeVirtualdomPath => `
		import jadeVirtualdom from '${jadeVirtualdomPath}';
		var template = jadeVirtualdom(${JSON.stringify(load.source)});
		export default template;
	`);
}
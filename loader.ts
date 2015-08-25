/// ES6 Loader Source Info
interface ModuleSource {
	source: string;
}

declare var __moduleName: string; // ESM module name var in SystemJS

declare module System {
	export function normalize(name: string, referrer?: string): Promise<string>;
}

let normalPromise = System.normalize('jade-virtualdom', __moduleName);

export function translate(load: ModuleSource) {
	return normalPromise.then(jadeVirtualdomPath => `
		import jadeVirtualdom from '${jadeVirtualdomPath}';
		var template = jadeVirtualdom(${JSON.stringify(load.source)});
		export default template;
	`);
}
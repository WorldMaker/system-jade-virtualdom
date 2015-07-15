/// ES6 Loader Source Info
interface ModuleSource {
	source: string;
}

export function translate(load: ModuleSource) {
	return `
		import jadeVirtualdom from 'jade-virtualdom';
		export default let template = jadeVirtualdom(${JSON.stringify(load.source)});
	`;
}
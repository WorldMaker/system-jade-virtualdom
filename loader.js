export function translate(load) {
    return `
		import jadeVirtualdom from 'jade-virtualdom';
		export default let template = jadeVirtualdom(${JSON.stringify(load.source)});
	`;
}
//# sourceMappingURL=loader.js.map
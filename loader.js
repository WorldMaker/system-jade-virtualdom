let jadeVirtualdomPath = System.normalize('jade-virtualdom');
export function translate(load) {
    return `
		import jadeVirtualdom from '${jadeVirtualdomPath}';
		export default let template = jadeVirtualdom(${JSON.stringify(load.source)});
	`;
}
//# sourceMappingURL=loader.js.map
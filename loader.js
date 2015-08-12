let normalPromise = System.normalize('jade-virtualdom');
export function translate(load) {
    return normalPromise.then(jadeVirtualdomPath => `
		import jadeVirtualdom from '${jadeVirtualdomPath}';
		export default let template = jadeVirtualdom(${JSON.stringify(load.source)});
	`);
}
//# sourceMappingURL=loader.js.map
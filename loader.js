let normalPromise = System.normalize('jade-virtualdom', __moduleName);
export function translate(load) {
    return normalPromise.then(jadeVirtualdomPath => `
		import jadeVirtualdom from '${jadeVirtualdomPath}';
		var template = jadeVirtualdom(${JSON.stringify(load.source)});
		export default template;
	`);
}
//# sourceMappingURL=loader.js.map
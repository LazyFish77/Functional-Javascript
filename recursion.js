let getDependencies =(tree, result) => {
 	let result = result || [];
 	let deps = tree.dependencies || {};
 	if(!tree.dependencies) return [];

 	Object.keys(deps).forEach((dep) => {
 		let depStr = dep + "@" + deps[dep].version;

 		if(result.indexOf(depStr) < 0) {
 			result.push(depStr);
 		}

 		getDependencies(deps[dep], result);
 	})

 	return result.sort();
}
module.exports = getDependencies
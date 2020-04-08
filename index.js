const postcss = require('postcss');
const parseQuoted = (str) => str.match(/^(['"])(.+)\1$/)[2];
const getBase = str => str.split('/')[0];

function resolve(path, aliases) {
	const pathComponents = path.split('/');
	const [base] = pathComponents;

	if (aliases.hasOwnProperty(base)) {
		pathComponents[0] = aliases[base];
		return resolve(pathComponents.join('/'), aliases);
	}

	return pathComponents.join('/');
}

module.exports = postcss.plugin(
	'postcss-import-alias',
	(aliases) => (css) => {
		css.walkAtRules('import', (rule) => {
			const importSource = resolve(parseQuoted(rule.params), aliases);
			rule.params = `"${importSource}"`;
		});
	},
);
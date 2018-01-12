var postcss = require('postcss');
var units = require('units-css');
var assign = require('object-assign');

module.exports = postcss.plugin('postcss-increase-text-size', function (opts) {
	opts = assign({
		fontIncrease: 2
	}, opts);

	return function (css) {
		css.walkDecls(function (decl) {
			if (decl.prop === 'font-size') {
				var propUnit = units.parse(decl.value);

				if (propUnit.unit === 'px') {
					propUnit.value += opts.fontIncrease;
				}
				decl.value = propUnit.value + propUnit.unit;
			}
		});
	};
});

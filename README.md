# postcss-import-alias

> Use aliases in your PostCSS import statements


## Install
```
$ npm i postcss-import-alias
```

## Usage
```js
import postcss from 'postcss';
import postcssImportAlias from 'postcss-import-alias';

postcss([
	postcssImportAlias({
		/* aliases */
		prism: 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0'
	})
]).process(YOUR_CSS);

```

```css
@import "prism/themes/prism.min.css";

// would compile to

@import "https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/themes/prism.min.css";
```


## License 
MIT
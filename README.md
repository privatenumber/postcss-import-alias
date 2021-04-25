# postcss-import-alias [![Latest version](https://badgen.net/npm/v/postcss-import-alias)](https://npm.im/postcss-import-alias) [![Monthly downloads](https://badgen.net/npm/dm/postcss-import-alias)](https://npm.im/postcss-import-alias) [![Install size](https://packagephobia.now.sh/badge?p=postcss-import-alias)](https://packagephobia.now.sh/result?p=postcss-import-alias)

Use aliases in your CSS import statements via PostCSS

## 🚀 Install
```
$ npm i postcss-import-alias
```

## 👨‍🏫 Usage
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

## 💼 License 
MIT

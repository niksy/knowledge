# Global once import for CSS and Sass

[Test](test)

## CSS

* [postcss-import][postcss-import] skips duplicates on local level with `skipDuplicates` option which is `true` by default
* For skipping duplicates on global level use [postcss-global-import-once][postcss-global-import-once]

## Sass

* For skipping duplicates on local level use [node-sass-import-once][node-sass-import-once] plugin with all options disabled
* For skipping duplicates on global level use [node-sass-global-import-once][node-sass-global-import-once]

[postcss-import]: https://github.com/postcss/postcss-import
[postcss-global-import-once]: https://github.com/niksy/postcss-global-import-once
[node-sass-import-once]: https://github.com/at-import/node-sass-import-once
[node-sass-global-import-once]: https://github.com/niksy/node-sass-global-import-once

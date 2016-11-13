'use strict';

const fs = require('fs');
const pify = require('pify');
const sass = require('node-sass');
const globalImportOnce = require('node-sass-global-import-once');
const importOnce = require('node-sass-import-once');
const files = ['a.scss', 'b.scss'];

Promise.all(files.map(( file ) => {
	return pify(fs.readFile)(`./in/scss/${file}`, 'utf8');
}))
	.then(( styles ) => {
		return Promise.all(styles.map(( style, i ) => {
			return pify(sass.render)({
				file: `./in/scss/${files[i]}`,
				data: style,
				importer: [
					globalImportOnce([
						{
							file: '**/a.scss',
							imports: [
								'lucky'
							]
						}
					]),
					importOnce,
				],
				importOnce: {
					index: false,
					css: false,
					bower: false
				}
			});
		}));
	})
	.then(( results ) => {
		return Promise.all(results.map(( result, i ) => {
			return pify(fs.writeFile)(`./out/scss/${files[i].replace('scss', 'css')}`, result.css);
		}));
	})
	.then(() => {
		console.log('Done');
	})
	.catch(( err ) => {
		console.log(err);
	});

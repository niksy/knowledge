'use strict';

const fs = require('fs');
const pify = require('pify');
const postcss = require('postcss');
const globalAtImportOnce = require('postcss-global-import-once');
const atImport = require('postcss-import');
const files = ['a.css', 'b.css'];

Promise.all(files.map(( file ) => {
	return pify(fs.readFile)(`./in/css/${file}`, 'utf8');
}))
	.then(( styles ) => {
		return Promise.all(styles.map(( style, i ) => {
			return postcss([
					globalAtImportOnce([
						{
							file: '**/a.css',
							imports: [
								'./lucky.css'
							]
						}
					]),
					atImport()
				])
				.process(style, { from: `./in/css/${files[i]}` });
		}));
	})
	.then(( results ) => {
		return Promise.all(results.map(( result, i ) => {
			return pify(fs.writeFile)(`./out/css/${files[i]}`, result.css);
		}));
	})
	.then(() => {
		console.log('Done');
	})
	.catch(( err ) => {
		console.log(err);
	});

# NPM package publishing

```sh
npm config set init.author.name "Your Name"
npm config set init.author.email "you@example.com"
npm config set init.author.url "http://example.com"
npm config set init.license "MIT"

npm login
```

If you’ve change data, run `npm login`.

After that, run `npm publish` inside project folder.

## Deprecate package

```sh
npm deprecate --otp=<code> <package-name>@"*" "Deprecation message"
```

## References

* https://gist.github.com/coolaj86/1318304
* http://quickleft.com/blog/creating-and-publishing-a-node-js-module
* https://github.com/npm/npm/issues/6345
* https://github.com/npm/npm/issues/10974#issuecomment-169411339

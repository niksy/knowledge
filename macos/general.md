# Recacache application preferences

In recent versions, macOS aggresively caches preferences (i.e. plist files) for applications. To recache application preferences, use following CLI command:

```sh
defaults read {bundle identifier}
```

`bundle identifier` is something like `com.apple.finder` or `com.google.Chrome`.

# References

* https://nethack.ch/2014/03/30/quick-tip-flush-os-x-mavericks-plist-file-cache/
* https://manytricks.com/blog/?p=3049

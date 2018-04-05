# General macOS tips

## Recache application preferences

In recent versions, macOS aggresively caches preferences (i.e. plist files) for applications. To recache application preferences, use following CLI command:

```sh
defaults read {bundle identifier}
```

`bundle identifier` is something like `com.apple.finder` or `com.google.Chrome`.

### References

* https://nethack.ch/2014/03/30/quick-tip-flush-os-x-mavericks-plist-file-cache/
* https://manytricks.com/blog/?p=3049

## Securely maintain generic passwords with Keychain

If you want generic passwords (e.g. rarely accessible HTTP basic auth credentials) accessible from your CLI, but don’t want them stored in text files and similar insecure places, the best way to store them is to use [macOS Keychain](https://en.wikipedia.org/wiki/Keychain_(software)).

### Adding generic passwords to Keychain

To add password, there are several ways:

1. Using CLI: `security add-generic-password -s Foobar -a foo -w bar -T ""`
	* `-s`: name of the service/account you want to identify in Keychain
	* `-a`: username of service/account
	* `-w`: password of service/account
	* `-T ""`: tells Keychain to always ask for permission to access data, even for apps that created Keychain entry
	* **Unfortunately, using this approach you can’t set to ask for user password when accessing data**
  
1. Using Keychain app:
	1. File → New Password Item
	1. Enter necessary information
	1. Double-click on new Keychain entry
	1. Select "Access Control" tab
	1. Activate "Ask for Keychain password" checkbox
	1. Enter user password
	1. Check again to confirm that checkbox is checked (repeat two times)

### Accessing generic passwords from Keychain

* Access Keychain entry username: `security find-generic-password -s Foobar | awk -F\" '/acct"<blob>/ {print $4}'`
* Access Keychain entry password: `security find-generic-password -s Foobar -w`

#### References

* https://developer.apple.com/legacy/library/documentation/Darwin/Reference/ManPages/man1/security.1.html
* https://github.com/mogensen/keychain
* http://stackoverflow.com/a/29543598/178058

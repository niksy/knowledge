# Virtual machines

## Basic setup

Use [iectrl](http://xdissent.github.io/iectrl/). If you want to see CLI output from the command, add `export DEBUG="iectrl:*"` to your user’s `.bash_profile`.

Make sure thath VirtualBox and VirtualBox Extension Pack versions match.

```sh
brew cask install virtualbox
brew cask install virtualbox-extension-pack
brew install unar
npm install -g iectrl
curl -s https://raw.githubusercontent.com/amichaelparker/ievms/master/ievms.sh | env IEVMS_VERSIONS="9 11 EDGE" REUSE_WIN7="yes" bash
```

## Windows 7

### Basic settings

* Windows Search → Language and there set everything to "Croatian"
* Set "HR" in taskbar
* Set correct time zone
* [Install security update if using IE11](https://github.com/xdissent/ievms/issues/246#issuecomment-69385014)
* IE > Internet Options > General > Homepage > Use new tab/Use blank

### Hosts file

1. Open your Windows start menu, search for the notepad application and then right click the Notepad icon.
1. Choose "Run as administrator" and then, while inside Notepad, browse to folder (`/windows/system32/drivers/etc`) that contains the `hosts` file.

VirtualBox uses `10.0.2.2` as host IP so your `hosts` file would look something like this:

```
10.0.2.2 example.loc
```

## References

* http://www.labnol.org/software/edit-hosts-files-as-administrator/13673/

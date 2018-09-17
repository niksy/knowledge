# Virtual machines

## Basic setup

Use [iectrl](http://xdissent.github.io/iectrl/). If you want to see CLI output from the command, add `export DEBUG="iectrl:*"` to your user’s `.bash_profile`.

```sh
brew cask install virtualbox
brew install unar
npm install -g iectrl
# Optionally, add existing IE VMs ZIP files to ~/.ievms
curl -s https://raw.githubusercontent.com/xdissent/ievms/master/ievms.sh | env IEVMS_VERSIONS="9 10 EDGE" bash
# VirtualBox License: https://github.com/xdissent/ievms/issues/328#issuecomment-393738851
```

## Windows 7 settings

* Windows Search → Language and there set everything to "Croatian"
* Set "HR" in taskbar
* Set correct time zone

## Hosts file

Hosts file is located at `/windows/system32/drivers/etc/hosts`. VirtualBox uses `10.0.2.2` as host IP so your `hosts` file would look something like this:

```
10.0.2.2 example.loc
```

### Edit hosts file on Windows 7

1. Open your Windows start menu, search for the notepad application and then right click the Notepad icon.
1. Choose "Run as administrator" and then, while inside Notepad, browse to folder (`/windows/system32/drivers/etc`) that contains the `hosts` file.

## VirtualBox VM settings

```
VBoxManage modifyvm "{VMNAME}" clipboard bidirectional
```

## References

* http://www.labnol.org/software/edit-hosts-files-as-administrator/13673/

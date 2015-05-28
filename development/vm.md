# Virtual machines

## Basic setup

Use [iectrl](http://xdissent.github.io/iectrl/). If you want to see CLI output from the command, add `export DEBUG="iectrl:*"` to your user’s `.bash_profile`.

```sh
brew cask install virtualbox
npm install -g iectrl
```

## Windows XP settings

* Control Pannel → Regional and Language Options → Languages → Text services and input languages → Details → Add → Croatian - Croatian

### IE8 KB927917 error

Error description:

```
HTML Parsing Error: Unable to modify the parent container element before the child element is closed (KB927917)
```

This is a known bug in Internet Explorer 8 which manifests itself from time to time and is easily fixed with [security update](https://www.microsoft.com/en-us/download/details.aspx?id=23606). VMs provided via modern.ie don’t include this security update so it needs to be applied manually.

## Windows 7 settings

* Windows Search → Language and there set everything to "Croatian"
* Set "HR" in taskbar

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

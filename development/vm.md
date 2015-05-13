# Virtual machines

## Basic setup

Use [iectrl](http://xdissent.github.io/iectrl/).

```sh
brew cask install virtualbox
npm install -g iectrl
```

Hosts file is located at `/windows/system32/drivers/etc/hosts`.

## Windows XP settings

* Control Pannel → Regional and Language Options → Languages → Text services and input languages → Details → Add → Croatian - Croatian

## Windows 7 settings

* Windows Search → Language and there set everything to "Croatian"
* Set "HR" in taskbar

### Edit hosts file on Windows 7

1. Open your Windows start menu, search for the notepad application and then right click the Notepad icon.
1. Choose "Run as administrator" and then, while inside Notepad, browse to folder (`/windows/system32/drivers/etc`) that contains the `hosts` file.

## VirtualBox VM settings

```
VBoxManage modifyvm "{VMNAME}" clipboard bidirectional
```

## References

* http://www.labnol.org/software/edit-hosts-files-as-administrator/13673/

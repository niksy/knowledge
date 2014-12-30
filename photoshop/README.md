# Photoshop

## Download

* [CS 6 apps individual download](http://helpx.adobe.com/x-productkb/policy-pricing/cs6-product-downloads.html)

### Creative Cloud

With [Homebrew](http://brew.sh/)

```sh
brew install caskroom/cask/brew-cask
brew cask install creative-cloud
```

## Settings

First, take a look at [settings screenshots](Preferences/Settings) and [presets](Preferences/Presets) inside "Preferences" folder.

After that, follow these instructions:

* [Color settings for Photoshop (and Illustrator)](http://bjango.com/articles/photoshop/)
    * Create profile "UI Work" for easier maintenance
* [Set "Classic Crop Mode"](http://twitter.com/jchristopher/status/255371549958369281)
* [Set "Global light" to 90º for all documents](http://photoshopsecrets.tumblr.com/post/36119981853/set-default-global-light-to-90)
* Set "Button Mode" for "Actions"
* Delete "Default Actions"
* Uncheck View → Show → Pixel Grid
* Save for Web → Metadata → None
* Move Tool → Layer
* At the bottom of the window turn on progress bar for "Save Progress"

## Export settings

Edit → Presets → Export/Import Presets…

## Bjango Actions installation

```sh
cd ~
curl -O -L https://github.com/bjango/Bjango-Actions/archive/master.zip
unzip master.zip
cd Bjango-Actions-master
cp -r Scripts/ ~/Library/Application\ Support/Adobe/Adobe\ Photoshop\ CS6/Presets/Scripts/
cd /Applications/Adobe\ Photoshop\ CS6/Presets/Scripts/
ln -s ~/Library/Application\ Support/Adobe/Adobe\ Photoshop\ CS6/Presets/Scripts/ Scripts
cd ~/Bjango-Actions-master
open Bjango\ Actions.atn
cd ~
rm -rf Bjango-Actions-master
rm master.zip
```

## Resolve Adobe Creative Cloud or Updates Notifier errors

1. Quit the Creative Cloud application.
2. Go to utilities, delete "Adobe Application Manager" and "Adobe Creative Cloud" (if not deleted during uninstallation) folders.
3. Delete "AAMUpdater" and "OOBE" folder from the location: `~/Library/Application Support/Adobe`
4. Delete "AAMUpdater", "AAMupdaterInventory" and "OOBE" folders from the location: `/Library/Application Support/Adobe`
5. Restart computer.
6. Reinstall Adobe Creative Cloud application.

### References

* https://forums.adobe.com/message/6806522#6806522

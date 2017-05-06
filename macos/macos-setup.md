# macOS setup

For macOS 10.9+. **This works for me, but I can’t guarantee it will work for you.** Still, you can see if you can change or modify your setup procedure with these instructions. Contributions welcome :).

## Backup old system

1. Remove licenses and deactivate software:
	* Creative Suite
	* Moom
	* Sublime Text
	* iTunes
	* GitHub SSH
1. Backup files
	* Moom PLIST
	* Transmission PLIST
1. Delete mail accounts

## Setup new system

After installation of OS is complete, follow next instructions. They’re not "set in stone" so you can probably mix and match them, but I’ve found that this order produces most desirable outcome.

1. Check for software updates via Mac App Store. It’s best first to update all the crucial parts of OS before continuing.

1. [Check if `/usr/local` has proper permissions (or does it even exists)](https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/El_Capitan_and_Homebrew.md).

1. Install XCode CLI tools.

	```sh
	xcode-select --install
	```

1. Get and run [dotfiles](https://github.com/niksy/dotfiles) setup.

	```sh
	cd ~
	mkdir .dotfiles
	cd .dotfiles
	git clone https://github.com/niksy/dotfiles.git .
	sh dotfiles link
	```

1. Close current shell and open new one so Terminal can accept new changes :)

1. Install [Homebrew](http://brew.sh), following these [instructions](http://brew.sh/#install).
	* **Important**: Remove `HOMEBREW_CASK_OPTS` from `.extra` and `.exports` if they contain `--appdir` or `--caskroom` arguments; fresh installation should use default Cask behavior

1. Install Homebrew packages and all other packages.

	```sh
	cd ~
	source .dotfiles/.brew
	source .dotfiles/.packages
	```

1. Add config data to `.extra`.

	```sh
	cd ~
	touch .extra
	echo 'export DOTFILES_COMPUTER_NAME="_COMPUTERNAME_";' >> .extra
	```

1. Add Git config data to `.gitconfig_extra`.

	```sh
	cd ~
	touch .gitconfig_extra
	git config --file .gitconfig_extra user.name "_NAME_"
	git config --file .gitconfig_extra user.email "_EMAIL_"
	```

1. Set Terminal profile to `~/.dotfiles/.init/niksy.terminal` and set it as default profile.

1. Run `.osx`. **Don’t forget to set proper password when asked for sudo permissions!**

	```sh
	cd ~
	source .dotfiles/.osx
	```

1. Run `.appconfig_extra`.

	```sh
	cd ~
	source .dotfiles/.appconfig_extra
	```

1. Set SSH keys, following these [instructions](https://help.github.com/articles/generating-ssh-keys#platform-mac). These instructions will generate key for GitHub.

	```sh
	cd ~/.ssh
	ssh-keygen -t rsa -C "_EMAIL_"
	pbcopy < ~/.ssh/id_rsa_github.pub
	ssh -T git@github.com
	```

1. Remove PDF from Downloads folder.

	```sh
	cd ~/Downloads
	rm -rf "About Downloads.lpdf"
	```

### Manual procedures

Some settings can’t be set automatically so we have to set them manually.

1. Set global settings
	* System Preferences → General → Recent items: 5
1. Menubar
	* Turn off Bluetooth
	* Remove icons for Bluetooth and Time Machine
1. Run daemon applications
	* The Unarchiver
	* Moom
1. Set services
	* System Preferences → iCloud
	* System Preferences → Internet Accounts
	* System Preferences → Users & Groups
		* Set account
			* Avatar
			* Apple ID
			* Contacts Card
		* Add Messages to login items and activate checkbox to hide it while turning OS on
		* Remove "iTunesHelper" item
	* System Preferences → Keyboard → Text
		* Set spelling for "U.S. English"
	* System Preferences → Keyboard → Shortcuts → Keyboard
		* Move focus to next window == ⌘“
1. Set macOS apps
	* Messages
		* Show status in menubar (check)
		* Preferences → Viewing (for "My" and "Sender")
		  * Background color: Automatic
		  * Font color: Black
		  * Font: Helvetica 12
	* Contacts  
		* Set "Google" as default account
	* Calendar  
		* Set "Ivan Nikolić" as default calendar
	* Finder
		* Renove icons from toolbar
	* Dock
		* Remove icons from dock
	* Mail
		* View → Hide Favorites Bar
		* For mailboxes set Mailbox → Use This Mailbox For
	 * iPhoto
		* Preferences → Connecting camera opens: No application
	 * Photos
	 	* [Disable automatic opening when camera is connected](http://lifehacker.com/uncheck-this-box-to-stop-photos-from-opening-when-you-c-1709336195)
1. Finder sidebar
	* Add Home and place at top
	* Add Movies and place below Downloads
	* Remove All My Files
	* Remove Tags
	* Remove CDs, DVDs, iPods
	* Remove Creative Cloud Files
1. Set 3rd party apps
	* Unarchiver
		* Select all types
		* Extract to same folder
	* Moom
		* c/p PLIST and `defaults read com.manytricks.Moom`
		* Add licence
		* Launch automatically on login
	* Transmission
		* c/p PLIST and `defaults read org.m0k.transmission`
	* Sublime Text 2/3
		* [Instructions](https://github.com/niksy/st-settings)
		* Add licence
		* Remove minimap
	* Dropbox
		* Use black and white menu bar icons (check)
		* Start Dropbox on system startup (uncheck)
		* Remove toolbar icon
	* Plex
		* System Preferences → Energy Saver → Computer Sleep: Never
		* Wake for network access

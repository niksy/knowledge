# macOS setup

## Backup old system

1. Remove licenses and deactivate software:
	* Creative Suite
	* Moom
	* Sublime Text
	* iTunes
	* GitHub SSH
1. Backup files
	* Moom PLIST
	* Rest PLIST
1. Delete mail accounts

## Setup new system

After installation of OS is complete, follow next instructions. They’re not "set in stone" so you can probably mix and match them, but I’ve found that this order produces most desirable outcome.

1. Check for and install software updates via Mac App Store.

1. [Check if `/usr/local` has proper permissions (or does it even exists)](https://github.com/inglesp/homebrew/blob/master/share/doc/homebrew/El_Capitan_and_Homebrew.md).

1. Install XCode CLI tools.

	```sh
	xcode-select --install
	```

1. Install [Homebrew](http://brew.sh), following these [instructions](http://brew.sh/#install). Ignore warning if Homebrew is not available in `PATH`, it will be available when following step is completed.

1. Get and run [dotfiles](https://github.com/niksy/dotfiles) setup. Follow instructions after everything is done.

	```sh
	cd ~
	mkdir .dotfiles
	cd .dotfiles
	git clone https://github.com/niksy/dotfiles.git .
	sh dotfiles link
	```

1. Set Terminal profile to `~/.dotfiles/.init/niksy.terminal` and set it as default profile.

1. Install Homebrew packages and all other packages.

	```sh
	cd ~
	source .dotfiles/.brew
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

1. Run `.macos`. **Don’t forget to set proper password when asked for sudo permissions!**

	```sh
	cd ~
	source .dotfiles/.macos
	```

1. Run `.macos_extra`.

	```sh
	cd ~
	source .dotfiles/.macos_extra
	```

1. Create SSH config.

	```sh
	mkdir .ssh
	cd ~/.ssh
	touch config
	```

1. Follow [instructions on proper SSH config usage under macOS](https://github.com/niksy/knowledge/blob/master/development/ssh-keys.md#use-keychain-on-macos-1012).

1. Set SSH keys, optionally following these [instructions](https://help.github.com/articles/generating-ssh-keys#platform-mac). These instructions will generate key for GitHub.

	```sh
	cd ~/.ssh
	ssh-keygen -t rsa -C "_EMAIL_"
	pbcopy < ~/.ssh/id_rsa_github.pub
	# Add to github.com settings
	# Add Host entry to ~/.ssh/config
	ssh -T git@github.com
	```

1. Install Node, npm and packages, and [login as npm user](/development/npm.md).

	```sh
	cd ~
	mkdir .nvm
	nvm install 12
	source .dotfiles/.packages
	```

### Manual procedures

Some settings can’t be set automatically so we have to set them manually.

1. Set global settings
	* System Preferences → General → Recent items: 5
	* System Preferences → Displays → Night Shift
	    * Schedule: Sunset to Sunrise
	    * Color Temperature: Between "Less Warm" and middle value
	* System Preferences → Desktop & Screen Saver → Desktop → Solid Colors (Black)
	* System Preferences → Siri → Show Siri in menu bar (uncheck)
	* System Preferences → Siri → Enable ask Siri (uncheck)
	* System Preferences → Dock & Menu Bar → Battery → Show Percentage (check)
	* System Preferences → Dock & Menu Bar → Clock → Show date (check)
1. Menubar
	* Turn on Bluetooth
	* Remove icon for Time Machine
1. Run daemon applications
	* The Unarchiver
	* Moom
1. Set services
	* System Preferences → iCloud
	* System Preferences → Internet Accounts
	* System Preferences → Users & Groups
		* Disable Guest user
	* System Preferences → Keyboard → Shortcuts → Keyboard
		* Move focus to the menu bar == ⌃-
		* Move focus to next window == ⌘“
	* System Preferences → Security & Privacy → General
		* Require password "immediately" after sleep or screen saver begins (check)
	* System Preferences → Sound
		* Alert sound: Basso
		* Play user interface sound effects (uncheck)
		* Show volume in menubar (check)
		* Alert volume: lower all the way to the left
	* System Preferences → Accessibility → Audio → Flash the screen when an alert sound occurs (check)
	* System Preferences → Notifications → Do Not Disturb → Turn on Do Not Disturb:
		* When the display is sleeping (check)
		* When the screen is locked (check)
		* When mirroring to TVs and projectors (check)
	* System Preferences → Spotlight → Search Results
		* Uncheck all
		* Applications (check)
		* Calculator (check)
		* System Preferences (check)
1. Set macOS apps
	* Terminal
		* Profiles → Advanced → Bell → Audible bell (uncheck)
		* Profiles → Advanced → Bell → Visual bell → Only when sound is muted (uncheck)
	* Messages
		* Show status in menubar (check)
	* Contacts  
		* Set "Google" as default account
	* Calendar  
		* Set "Ivan Nikolić" (Google) as default calendar
	* Finder
		* Remove icons from toolbar
		* Open your user folder and then: View → Show View Options → Show Library Folder (check)
	* Dock
		* Remove icons from dock
	* Mail
		* Set mailbox behavior with Accounts → Mailbox Behaviors
		* Erase junk/deleted messages: Never
	* Photos
	 	* [Disable automatic opening when camera is connected](http://lifehacker.com/uncheck-this-box-to-stop-photos-from-opening-when-you-c-1709336195)
1. Finder sidebar
	* Add Home and place at top
	* Remove Tags
	* Remove Recents
1. Set 3rd party apps
	* Unarchiver
		* Select all types
	* Moom
		* Copy and paste plist file
		* Run `defaults read com.manytricks.Moom`
		* Add licence
		* Launch automatically on login
	* Rest
		* Copy and paste plist file
		* Run `defaults read dangelov.Rest-Lite`
	* Sublime Text
		* [Instructions](https://github.com/niksy/st-settings)
		* Add licence
		* Remove minimap
1. Position laption and desktop monitor configuration:
	* ![Screenshot 2021-08-16 at 16 36 11](https://user-images.githubusercontent.com/389286/130928340-2a01124d-fb38-41a4-9cf6-00b71eb483d6.png)

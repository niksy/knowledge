# Basic PHP configuration

1. Install PHP.

```sh
brew tap homebrew/php
brew install php56 --with-httpd24 --with-pear
```

1. Install PHP extensions and related packages.

```sh
brew install php56-xdebug --build-from-source
brew install php56-memcache --build-from-source
brew install memcached
brew install composer
```

1. Adjust PEAR configuration

```sh
chmod -R ug+w $(brew --prefix php56)/lib/php
pear config-set auto_discover 1
pear update-channels
pear upgrade
```

1. Install PEAR and Composer packages.

```sh
pear install Cache_Lite
composer global require phing/phing:2.7.0
```

1. Inside `/usr/local/etc/apache2/2.4/httpd.conf` add following line in part for module loading (if `php5_module` is already added, remove it and use following line):

```apache
LoadModule php5_module /usr/local/opt/php56/libexec/apache2/libphp5.so
```

1. Inside `/usr/local/etc/php/5.6/php.ini` uncomment `date.timezone` and add `Europe/Zagreb`.

```ini
date.timezone = "Europe/Zagreb"
```

1. For backwards compatibility, uncomment following line in `/usr/local/etc/php/5.6/php.ini`

```ini
always_populate_raw_post_data = -1
```

## Browser tries to download PHP file

It can happen da PHP tries to download file instead of running it inside browser. It’s best to follow these instructions (the old turn off/turn on :)):

* Call `.php` in browser. Browser will try to download file.
* Rename `.php` to `.bak`.
* Call `.php` in browser. File doesn’t exist and we get 404.
* Restart server (`server restart`).
* Rename `.bak` to `.php`.
* Call `.php` in browser. After that everything should be OK.

## References

* [PHP file download resolving](http://stackoverflow.com/a/10489523/178058)
* [PHP instructions](http://justinhileman.info/article/reinstalling-php-on-mac-os-x/)

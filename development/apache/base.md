# Basic Apache configuration

1. Install Apache.

	```sh
brew tap homebrew/apache
brew install httpd24 --with-privileged-ports
```

1. Create `Sites` folder if it doesn’t exist (on newer versions of macOS it doesn’t).

	```sh
cd ~
mkdir Sites
```

1. Create folder `sites-available` in Apache root folder (`/usr/local/etc/apache2/2.4/`). Inside `sites-available` for every virtual host you must create specific `.conf` file with settings (use [standard virtual host configuration](#standard-virtual-host-configuration)).

1. Create folder `/usr/local/etc/apache2/2.4/other` and inside it create configuration file `httpd-extra.conf` and inside it add following content:

	```apache
User niksy
Group staff
ServerName localhost
Include /usr/local/etc/apache2/2.4/sites-available/*.conf
```

1. Activate (uncomment) following modules inside `/usr/local/etc/apache2/2.4/httpd.conf`:
 
	```apache
LoadModule deflate_module libexec/apache2/mod_deflate.so
LoadModule ssl_module libexec/apache2/mod_ssl.so
LoadModule rewrite_module libexec/apache2/mod_rewrite.so
```

1. At the bottom of `/usr/local/etc/apache2/2.4/httpd.conf` add following content:

	```apache
Include /usr/local/etc/apache2/2.4/other/*.conf
```

1. Restart server (`server restart`).

## Standard virtual host configuration

```apache
<VirtualHost *:80>
	ServerName VHOSTNAME
	ServerAlias VHOSTNAMEALIAS
	ServerAlias VHOSTNAME.*.xip.io
	DocumentRoot "/Users/USERNAME/Sites/VHOSTNAME"
	<Directory "/Users/USERNAME/Sites/VHOSTNAME">
		Options Indexes FollowSymLinks ExecCGI MultiViews
		AllowOverride All
		Require all granted
	</Directory>
</VirtualHost>
```

After creating virtual host, you need to add directives inside `/etc/hosts` file:

```sh
127.0.0.1 VHOSTNAME
127.0.0.1 VHOSTNAMEALIAS
```

## Symlinking

If you try to symlink folder/file which is not inside `Sites` folder, Apache may not allow access to that data. You need to run `chmod +x {FOLDER}` on that folder (and possibly to every parent folder up to user folder).

## References

* [HTTP and HTTPS parts](http://serverfault.com/questions/83669/apache2-with-ssl-do-i-have-to-copy-virtualhost-blocks)
* [Starting configuration for virtual host](https://github.com/zielot/apache-setup-osx/blob/apache-zielot/template.http)
* http://paulmason.name/item/change-apache-user-group-in-lion-os-x
* http://www.davidxia.com/2012/05/turn-mac-os-x-lion-into-a-lamp-web-server-without-mamp
* http://coolestguyplanettech.com/downtown/install-and-configure-apache-mysql-php-and-phpmyadmin-osx-108-mountain-lion
* http://kevchapman.co.uk/development/setting-up-apache-on-snow-leopard/
* http://www.456bereastreet.com/archive/201104/apache_with_virtual_hosts_php_and_ssi_on_mac_os_x_106/
* http://maestric.com/doc/mac/apache_php_mysql_snow_leopard

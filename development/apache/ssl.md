# SSL configuration

1. Geneate SSL certificate.

	```sh
cd /etc/apache2/extra
sudo mkdir ssl
cd ssl
sudo openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
sudo openssl rsa -passin pass:x -in server.pass.key -out server.key
sudo rm server.pass.key
sudo openssl req -new -key server.key -out server.csr
sudo openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```

1. Inside `/etc/apache2/other/httpd-extra.conf` at the bottom add following content:

	```apache
Listen 443
```

1. After that, inside `/etc/apache2/sites-available/` folder you can create new configuration file for SSL site, or if SSL site is part of existing one, add at the bottom of existing configuration file.

1. Restart server (`server restart`).

#### Standard SSL virtual host configuration

```apache
<VirtualHost *:443>
	SSLEngine on
	SSLCipherSuite ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP:+eNULL
	SSLOptions +FakeBasicAuth +ExportCertData +StdEnvVars +StrictRequire
	SSLCertificateFile "/etc/apache2/extra/ssl/server.crt"
	SSLCertificateKeyFile "/etc/apache2/extra/ssl/server.key"
	BrowserMatch "MSIE [2-5]" nokeepalive ssl-unclean-shutdown downgrade-1.0 force-response-1.0
	
	# This is a copy of standard port 80 VirtualHost directive
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

## References

* https://devcenter.heroku.com/articles/ssl-certificate-self

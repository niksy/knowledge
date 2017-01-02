# SSL configuration

## Generate SSL certificate

1. Geneate SSL certificate. Easiest way is to use `self-signed-cert-generator` function from [my dotfiles](https://github.com/niksy/dotfiles).

	```sh
self-signed-cert-generator example.loc
```

1. Inside `/usr/local/etc/apache2/2.4/other/httpd-extra.conf` at the bottom add following content:

	```apache
Listen 443
```

1. After that, inside `/usr/local/etc/apache2/2.4/sites-available/` folder you can create new configuration file for SSL site, or if SSL site is part of existing one, add at the bottom of existing configuration file.

1. Restart server (`server restart`).

## Accept self-signed certificates on macOS

Web browsers, Google Chrome in particular, are very aggresive in terms of web security so self-signed certificates and their validity can be pain in the ass. To have them accepted on macOS with nice green lock icon, follow these steps.

1. [Generate SSL certificate](#generate-ssl-certificate).

1. **It’s important to use URL of your project for function’s first argument.** So if your project has URL example.loc, use that.

1. [Add certificate to your virtual host configuration](#standard-ssl-virtual-host-configuration).

1. Add certificate to Keychain. This requires little GUI action. I suggest you follow these [instructions](http://www.andrewconnell.com/blog/setup-self-signed-certificates-trusting-them-on-os-x#add-the-certificate-as-a-trusted-root-authority).

1. Repeat for every subsite on the same domain (e.g. if you have subsite foo.example.loc, you need to create separate SSL configuration).

## Standard SSL virtual host configuration

```apache
<VirtualHost *:443>
	SSLEngine on
	SSLCipherSuite ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP:+eNULL
	SSLOptions +FakeBasicAuth +ExportCertData +StdEnvVars +StrictRequire
	SSLCertificateFile "/usr/local/etc/apache2/2.4/extra/ssl/server.crt"
	SSLCertificateKeyFile "/usr/local/etc/apache2/2.4/extra/ssl/server.key"
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
* http://www.andrewconnell.com/blog/setup-self-signed-certificates-trusting-them-on-os-x

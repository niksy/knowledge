# Compression configuration

1. Inside `/usr/local/etc/apache2/2.4/other/httpd-extra.conf` at the bottom add:

	```apache
AddOutputFilterByType DEFLATE application/atom+xml
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/json
AddOutputFilterByType DEFLATE application/ld+json
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-web-app-manifest+json
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/x-component
AddOutputFilterByType DEFLATE text/xml
```

1. Restart server (`server restart`).

## References

* [gzip directives](https://github.com/h5bp/server-configs-apache/blob/master/.htaccess#L515)

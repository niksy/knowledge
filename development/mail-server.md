# Mail server

1. Basic setup. Here I’m using dummy Gmail account for setting up local server.

	```sh
	cd /etc/postfix
	sudo touch sasl_passwd
	echo "smtp.gmail.com:587 golub.pismohrana@gmail.com:letushtuke" | sudo tee sasl_passwd >/dev/null
	sudo postmap sasl_passwd
	sudo subl main.cf
	```

1. At the bottom of `main.cf` add following content:

	```
	# Minimum Postfix-specific configurations.
	mydomain_fallback = localhost
	mail_owner = _postfix
	setgid_group = _postdrop
	relayhost=smtp.gmail.com:587

	# Enable SASL authentication in the Postfix SMTP client.
	smtp_sasl_auth_enable=yes
	smtp_sasl_password_maps=hash:/etc/postfix/sasl_passwd
	smtp_sasl_security_options=

	# Enable Transport Layer Security (TLS), i.e. SSL.
	smtp_use_tls=yes
	smtp_tls_security_level=encrypt
	tls_random_source=dev:/dev/urandom
	```

1. Test mail server.

	```sh
	sudo postfix start/stop
	date | mail -s test user@example.com
	```

## References

* https://gist.github.com/larrybotha/6009971
* http://benjaminrojas.net/configuring-postfix-to-send-mail-from-mac-os-x-mountain-lion/

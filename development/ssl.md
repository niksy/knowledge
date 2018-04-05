# SSL configuration

## Generate SSL certificate

1. Geneate SSL certificate. Easiest way is to use `self-signed-cert-generator` function from [my dotfiles](https://github.com/niksy/dotfiles).

	```sh
	self-signed-cert-generator example.loc
	```

## Accept self-signed certificates on macOS

Web browsers, Google Chrome in particular, are very aggresive in terms of web security so self-signed certificates and their validity can be pain in the ass. To have them accepted on macOS with nice green lock icon, follow these steps.

1. [Generate SSL certificate](#generate-ssl-certificate).
1. `security add-trusted-cert -r trustRoot -k $(security default-keychain | xargs) example.loc.crt`

## References

* https://devcenter.heroku.com/articles/ssl-certificate-self
* http://www.andrewconnell.com/blog/setup-self-signed-certificates-trusting-them-on-os-x

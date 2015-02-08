# Remote testing

## Virtual host for testing on mobile devices

For virtual host directive add:

```apache
ServerAlias [project].*.xip.io
```

## Proxy browser testing

```sh
npm install -g localtunnel
lt --port 80 --local-host example.loc --subdomain example2
```

Open `example2.localtunnel.me`.

## Static IP address

To avoid constant new IP setting, it is good practice to set static IP in combination with Network Location.

1. Create "Network Location" for static IP (call it "Static IP") - [instructions](http://www.macinstruct.com/node/549)
2. After that, follow [instructions for setting static IP](http://www.macinstruct.com/node/550), **but instead of "Manual" choose "Using DHCP with manual address"**.
3. After that, to be secure, open 127.0.0.1 and new static IP in browser. You should get same content.

## Remote debug

```sh
npm install -g weinre
weinre --boundHost=example.loc.{LOCALIP}.xip.io -all-
```

After that, follow instructions for setting script tag on page.

## References

* http://mobiletestingfordummies.tumblr.com/post/27405408570/web-inspector-remote
* http://www.thenerdary.net/post/24695946158/xip-io-and-apache-serveralias

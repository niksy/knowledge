# SSH keys

## Generate key

These instructions will generate key for GitHub ([original instructions](https://help.github.com/articles/generating-ssh-keys/#platform-mac)).

```sh
cd ~/.ssh
ssh-keygen -t rsa -C "_EMAIL_"
pbcopy < ~/.ssh/id_rsa_github.pub
ssh -T git@github.com
```

## Check generated key

Check generated key and connection status with host: `ssh -T [user]@[host]`

## Generating `id_rsa_[example]` key

1. When you’re generating key and it asks you to save it to `id_rsa`, choose another name, e.g. `id_rsa_example`.
1. Contents of `.pub` file should be provided to server (via GUI, authorized keys and similar).
1. After that, add key to list of known keys with `ssh-add id_rsa_example`.
1. After that, inside `~./ssh/` create `config` file and fill it with following data which will connect your identity with host:

	```
Host example.com
HostName example.com
User example
IdentityFile ~/.ssh/id_rsa_example
```

1. After that, [check generated key](#check-generated-key).

Why explicit name for `id_rsa`? That way you know which key is for what host.

## Add public key to remote machine

`ssh-copy-id` allows one to easily set up passwordless SSH connections on a new machine. It does this by copying over your public key and setting the correct permissions.

Usage: `ssh-copy-id -i example.pub username@host`

## Use Keychain on macOS 10.12+

To make macOS 10.12+ use SSH credentials stored to Keychain and not ask you for passphrase everytime you try to use SSH entry, add this to `~/.ssh/config` at top of the file:

```
Host *
	UseKeychain yes
```

## References

* [Basic instructions](http://net.tutsplus.com/tutorials/tools-and-tips/how-to-work-with-github-and-multiple-accounts/)
* [Multiple SSH keys](http://dbushell.com/2013/01/27/multiple-accounts-and-ssh-keys/)
* http://superuser.com/a/1158050
* http://apple.stackexchange.com/a/254714/26182

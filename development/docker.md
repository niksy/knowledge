# Docker

## Installation

Install packages.

```sh
brew cask install virtualbox
brew install docker
brew install docker-machine
brew install docker-compose
```

Create the virtual machine.

```sh
docker-machine create -d virtualbox dev
```

Import environment variables for the Docker CLI.

```sh
eval "$(docker-machine env dev)"
```

## Accessing container localhost

Usually you would do that with `0.0.0.0` or `localhost`, so if port is mapped from `4444` on guest to `4444` on host, URL would be `0.0.0.0:4444`. But since container is running in VM in macOS, you need to use the IP of the VM, which you would get with `docker-machine ip dev`. Assuming the IP is `192.168.99.100`, URL would be `192.168.99.100:444`.

## References

* https://www.reddit.com/r/docker/comments/38l5as/osx_tip_using_dockermachine_vs_boot2docker/crwhtz6
* http://sticksnglue.com/wordpress/a-future-without-boot2docker-featuring-docker-machine/

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

## References

* https://www.reddit.com/r/docker/comments/38l5as/osx_tip_using_dockermachine_vs_boot2docker/crwhtz6
* http://sticksnglue.com/wordpress/a-future-without-boot2docker-featuring-docker-machine/

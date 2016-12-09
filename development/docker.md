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

## Getting error `client is newer than server`?

See http://stackoverflow.com/a/34015272/178058.

## Stop and remove all Docker containers

```sh
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

Or
```sh
docker ps -aq | xargs docker rm
```

## Start interactive session

Assuming Ubuntu installation:

```sh
docker run -it <image> /bin/bash
```

Or you can attach to stopped container with Bash already started:

```sh
docker start <container>
docker attach <container>
```

## References

* https://www.reddit.com/r/docker/comments/38l5as/osx_tip_using_dockermachine_vs_boot2docker/crwhtz6
* http://sticksnglue.com/wordpress/a-future-without-boot2docker-featuring-docker-machine/
* https://coderwall.com/p/ewk0mq/stop-remove-all-docker-containers
* https://gist.github.com/mitchwongho/11266726

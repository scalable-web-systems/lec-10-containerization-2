# A Node Server and Client in Docker

## Network

First, we need a network:

```bash
docker network create mynet
```

## Server

To allow the server port to be accessed outside of the container we need to set *port forwarding*. We do this using the `-p` flag. The `-p` flag takes a parameter of `HOST:CONTAINER`, where the `HOST` is the host of the computer the container is running on and `CONTAINER` is the port the container will export to the outside world. The host and container port numbers do not necessarily need to be the same. However, the container port must be the same as the one used by the server implementation.

```bash
cd server
docker build -t 05-node-server .
docker run --net=mynet --rm -p 3000:3000 --name 05-server 05-node-server
```

## Client

To run the client you do this:

```bash
cd client
docker build -t 05-node-client .
docker run --net=mynet --rm --name 05-client 05-node-client
```

## Clean Up

After you are done creating stuff, you can clean up with the following commands:

(only do this if you do not want to keep anything around)

```bash
docker system prune -a
```

Note the flags to `system prune`:

- `-a`: this flag also removes containers that are not being used.

Now, we are back to a clean slate.

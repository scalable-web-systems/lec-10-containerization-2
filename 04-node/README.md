# A Node Server and Client in Docker

## Network

First, we need a network:

```bash
docker network create mynet
```

## Server

To run the server you do this:

```bash
cd server
docker build -t 04-node-server .
docker run --net=mynet --rm --name 04-server 04-node-server
```

## Client

To run the client you do this:

```bash
cd client
docker build -t 04-node-client .
docker run --net=mynet --rm --name 04-client 04-node-client
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

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
# MongoDB Image

## Create a network

We need to create a network to have two docker containers be able to talk to each other on the same network. This is easy to do:

```bash
docker network create mynet
```

Now, you have a network. Incidentally, to remove the network you simply run this command:

```bash
docker network rm mynet
```

## Run MongoDB Server

Booting up a MongoDB server is easy as pie:

```bash
docker run --net=mynet --name mymongo -d mongo
```

Note the following docker flags that are used:

- `--net`: this specifies the network
- `--name`: this names the container (easy to reference)
- `-d`: "detaches" the container and runs it in the background

This will run the mongodb server in the background. To stop the server we need to run the `docker stop [<container-id>|<container-name>]` command. You have seen the use of this command using the container ID before, however, since we specified a name for this container we can remove it using the name as well.

To remove the container, you can use the `docker stop [<container-id>|<container-name>]` command.

Now that the server is running, we want to create another container on the same network running the mongo shell.

## Run Mongo Shell

Booting up a MongoDB shell is easy as pie:

```bash
docker run -it --net=mynet --rm mongo mongosh --host mymongo test
```

Note the following docker flags that are used:

- `-it`: connects I/O to your terminal
- `--rm`: removes the container when the container stops (convenient)

Remember, after the image name in the docker command we specify the command to run (if we are overriding the built-in command). In this case, the command is `mongosh --host mymongo test`.

Note the flags to the `mongosh` program:

- `--host`: the name of the host mongodb is running on. We specified this as `mymongo` when we booted up the server.

The `test` argument is the database we want to connect to.

## Clean Up

After you are done creating stuff, you can clean up with the following commands:

(only do this if you do not want to keep anything around)

```bash
docker system prune -a
```

Note the flags to `system prune`:

- `-a`: this flag also removes containers that are not being used.

Now, we are back to a clean slate.

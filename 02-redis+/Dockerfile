# Use an existing docker image as the base
FROM alpine

# Download and install dependencies
RUN apk add --update redis

# Build the image once. Then remove this line and build again.
# RUN apk add --update emacs

# Tell the image what to do when it starts as a container
CMD [ "redis-server" ]

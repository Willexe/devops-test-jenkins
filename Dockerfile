FROM node:18-bullseye
USER root
RUN apt-get update && apt-get install -y git
USER node

FROM mysql/mysql-server:5.6

LABEL description="Twitter streaming database image"
LABEL maintainer="Shaofeng Liu"

COPY twitter.sql  /docker-entrypoint-initdb.d

#init database with password, database name, user, and user password
ENV MYSQL_ROOT_HOST=%

ENV MYSQL_ROOT_PASSWORD=max

ENV MYSQL_DATABASE=twitter

ENV MYSQL_USER=hero

ENV MYSQL_PASSWORD=max
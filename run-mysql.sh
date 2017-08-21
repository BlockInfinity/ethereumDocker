#!/bin/bash

sudo docker rm -f mysqlName

sqldata="$(pwd)/volumes/mysql"

sudo docker run -d -v $sqldata:/var/lib/mysql --name=mysqlName --env="MYSQL_ROOT_PASSWORD=mypassword" mysql 



#!/bin/bash

# MYSQL Container 
sudo docker rm -f mysqlName
sudo docker run --detach --name=mysqlName --env="MYSQL_ROOT_PASSWORD=mypassword" mysql

# mgsgde/testrpc Container 
sudo docker rm -f testrpcName
sudo docker run --detach -it -p 8545:8545 --name testrpcName mgsgde/testrpc


# Authority Container (swagger api, truffle and mysql)
pathTruffle="/home/mgsgde/template_eth/truffle"
pathSwagger="/home/mgsgde/template_eth/swagger"

sudo docker rm -f truffleAndAPIName
sudo docker run  --link mysqlName:mgsgde/mysql --link testrpcName:mgsgde/testrpc --name truffleAndAPIName -v $pathTruffle:/src/truffle/ -v $pathSwagger:/src/swagger -it -p 8081:8081 -p 2222:2222 -p 8080:8080 -p 8181:8181 mgsgde/truffleandapi

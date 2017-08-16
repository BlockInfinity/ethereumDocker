
# MYSQL Container 
sudo docker rm -f mysqlName
sudo docker run --detach --name=mysqlName --env="MYSQL_ROOT_PASSWORD=mypassword" mysql

# TESTRPC Container 
sudo docker rm -f testrpcName
sudo docker run --detach -it -p 8545:8545 --name testrpcName testrpc


# Authority Container (swagger api, truffle and mysql)
pathTruffle="$(pwd)/truffle"
pathSwagger="$(pwd)/swagger"

sudo docker rm -f truffleAndAPIName
sudo docker run --link mysqlName:mysql --link testrpcName:testrpc --name truffleAndAPIName -v $pathTruffle:/src/truffle/ -v $pathSwagger:/src/swagger -it -p 8081:8081 -p 2222:2222 -p 8080:8080 -p 8181:8181 truffleandapi

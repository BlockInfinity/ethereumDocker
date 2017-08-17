
sudo docker rm -f mysqlName
sudo docker run --detach --name=mysqlName --env="MYSQL_ROOT_PASSWORD=mypassword" mysql
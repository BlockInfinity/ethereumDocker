sudo docker build -t truffleandapi -f Dockerfile.truffleAndAPI .

pathTruffle="$(pwd)/truffle"
pathSwagger="$(pwd)/swagger"

# Delete all containers
sudo docker rm -f truffleAndAPIName
sudo docker run --link mysqlName:mysql --link testrpcName:testrpc --name truffleAndAPIName -v $pathTruffle:/src/truffle/ -v $pathSwagger:/src/swagger -it -p 8081:8081 -p 2222:2222 -p 8080:8080 truffleandapi

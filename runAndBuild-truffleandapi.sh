sudo docker build -t mgsgde/truffleandapi -f Dockerfile.truffleandapi .

pathTruffle="$(pwd)/truffle"
pathSwagger="$(pwd)/swagger"

# Delete all containers
sudo docker rm -f truffleAndAPIName
sudo docker run --link mysqlName:mgsgde/mysql --link testrpcName:mgsgde/testrpc --name truffleAndAPIName -v $pathTruffle:/src/truffle/ -v $pathSwagger:/src/swagger -it -p 8181:8181 -p 8081:8081 -p 2222:2222 -p 8080:8080 mgsgde/truffleandapi

#!/bin/bash
pathTruffle="$(pwd)/truffle"
pathSwagger="$(pwd)/swagger"

sudo docker rm -f truffleAndAPIName

sudo docker run --link mysqlName:mgsgde/authoritydb --link testrpcName:mgsgde/testrpc --name truffleAndAPIName -v $pathTruffle:/src/truffle/ -v $pathSwagger:/src/swagger -it -p 8081:8081 -p 2222:2222 -p 8080:8080 -p 8181:8181 mgsgde/truffleandapi

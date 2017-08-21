#!/bin/bash

sudo docker build . -t mgsgde/mysql -f Dockerfile.mysql

sudo ./run-mysql.sh
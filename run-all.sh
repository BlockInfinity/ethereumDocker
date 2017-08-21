#!/bin/bash

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

sudo ./run-mysql.sh
sudo ./run-testrpc.sh
sudo ./run-truffleandapi.sh
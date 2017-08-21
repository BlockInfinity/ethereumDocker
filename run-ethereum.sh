#!/bin/bash
sudo docker rm -f testrpcName
sudo docker rm -f ethereumName
sudo docker run --name ethereumName -it -p 8545:8545 -p 30303:30303 -v /home/$USER/.ethereum:/root/.ethereum ethereum/client-go --rpc --rpcaddr "0.0.0.0" console
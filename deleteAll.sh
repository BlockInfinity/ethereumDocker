# Delete all containers
sudo sudo docker rm -f $(docker ps -a -q)

# Delete all images
sudo docker rmi -f $(docker images -q)

# Delete all Networks
sudo docker network remove -f $(docker network list -q)
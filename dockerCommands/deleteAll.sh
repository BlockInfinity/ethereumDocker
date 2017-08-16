# Delete all containers
sudo sudo docker rm -f $(docker ps -a -q)

# Delete all images
sudo docker rmi $(docker images -q)

# Delete all Networks
sudo docker network remove $(docker network list -q)
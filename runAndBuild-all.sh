./dockerCommands/runAndBuild-mysql.sh

echo -e "\n \n Initializing SQL Database. It takes 10 seconds."

./dockerCommands/runAndBuild-testrpc.sh

./dockerCommands/runAndBuild-truffleAndAPI.sh



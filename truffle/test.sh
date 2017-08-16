echo 'figlet Blockinfinity Karlsruhe' && \
echo 'figlet Deploy Contracts' && \
cd /truffle/ && truffle deploy --network container 
# && \
# echo 'figlet Test Contracts' && \
# truffle test --network container && cd ../swagger && \
# echo 'figlet Test Swagger Api' && \
# swagger project test && \
# echo 'figlet Start API' && \
# swagger project start
module.exports = {
    networks: {
        local: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },

        container: {
            host: "testrpcName",
            port: 8545,
            network_id: "*" // Match any network id
        }
    },

};
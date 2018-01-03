
module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 4400000,
      gasPrice: 2100000000000,
    },
    test: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 3000000,
      gasPrice: 2100000000000,
    },
  },
};

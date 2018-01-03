const NumataCoin = artifacts.require('AlisFund.sol');

module.exports = function deployContracts(deployer) {
    deployer.deploy(NumataCoin)
};
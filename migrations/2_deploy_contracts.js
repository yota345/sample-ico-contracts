const fs = require('fs');
const NumataCrowdsale = artifacts.require('NumataCrowdsale.sol');
const NumataFund = artifacts.require('NumataFund.sol');
const crowdsaleParams = JSON.parse(fs.readFileSync('../config/crowdsale.json', 'utf8'));
const fundParams = JSON.parse(fs.readFileSync('../config/fund.json', 'utf8'));

module.exports = function deployContracts(deployer) {
    const cap = web3.toWei(crowdsaleParams.cap, 'ether');
    const initialFundBalance = web3.toWei(crowdsaleParams.initialFundBalance, 'ether');
    const goal = web3.toWei(crowdsaleParams.goal, 'ether');
    const endTime = crowdsaleParams.startTime + (86400 * crowdsaleParams.icoDays)

    deployer.deploy(NumataFund, fundParams.owners, fundParams.required).then(() =>
        deployer.deploy(NumataCrowdsale,
            crowdsaleParams.startTime,
            endTime,
            crowdsaleParams.rate.base,
            goal,
            cap,
            initialFundBalance,
            NumataFund.address
        )
    );

};
const fs = require('fs');

export const NumataCrowdsale = artifacts.require('NumataCrowdsale.sol');
export const NumataFund = artifacts.require('NumataFund.sol');
export const NumataToken = artifacts.require('NumataToken.sol');
export const crowdsaleParams = JSON.parse(fs.readFileSync('./config/crowdsale.json', 'utf8'));
export const startTime = crowdsaleParams.startTime;
export const icoDays = crowdsaleParams.icoDays;
export const cap = crowdsaleParams.cap;
export const tokenCap = crowdsaleParams.tokenCap;
export const rate = crowdsaleParams.rate.base;
export const goal = crowdsaleParams.goal;
export const initialFundBalance = crowdsaleParams.initialFundBalance;

// const ETLCoin = artifacts.require('ETLCoin');
const GuessTheCardReward = artifacts.require('GuessTheCardReward');

module.exports = function (deployer) {
  // deployer.deploy(ETLCoin);
  deployer.deploy(GuessTheCardReward);
};
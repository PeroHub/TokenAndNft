const NewCoin = artifacts.require("NewCoin");

module.exports = function (deployer) {
  deployer.deploy(NewCoin);
};

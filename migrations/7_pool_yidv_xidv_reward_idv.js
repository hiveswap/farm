const SmartChef = artifacts.require("SmartChef");
const IBEP20 = artifacts.require("IBEP20");

module.exports = async function (deployer) {
    const wmap = "0x13cb04d4a5dfb6398fc5ab005a6c84337256ee23"
    await deployer.deploy(SmartChef,wmap);
    const chef = await SmartChef.deployed();
    // xidv-yidv
    const stakeToken = "0xed65c10bb8b2c1a118f7079b79b080f3c13cba3b";
    const idv = "0xeAc6cFD6e9e2FA033d85b7ABdb6B14FE8aA71f2A";
    const rewardToken = await IBEP20.at(idv);
    // 3
    const rewardPerBlock = "3000000000000000000";
    // 挖矿持续时间：518400个区块 30天 每日区块数为：17,280；区块间隔：5s
    // end = start + 518400
    const start = "";
    const end = "";

    const poolLimitPerUser = 0;

    await chef.initialize(stakeToken, rewardToken.address, rewardPerBlock, start, end, poolLimitPerUser);
    // 测试
    // const totalReward = "1000000000000000000";
    // 正式
    // const totalReward = "1555200000000000000000000";
    // await rewardToken.transfer(chef.address, totalReward);
};



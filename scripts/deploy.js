const hre = require("hardhat");

async function main() {

  const daVinci_ctrt = await hre.ethers.getContractFactory("daVinci");
  const ctrt=await daVinci_ctrt.deploy();
  await ctrt.deployed();

  console.log("daVinci contract address=", ctrt.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

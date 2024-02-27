const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/daVinci.sol/daVinci.json");

const tokenAddress = "0x5FcA3E265683e2D84D18E89c656616d2BFf7dB4E";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x6c21F593cAbf61Cc45669eeE8178155F51e342fE"; 

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("daVinci Assets balance " + await token.balanceOf(walletAddress));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

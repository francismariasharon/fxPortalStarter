const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;
  const networkAddress = "https://ethereum-goerli.publicnode.com";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);
  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x2C4Ce5c69D228DE4EEA86ef990de02bDAc5c3805";

  const daVinci_ctrt = await ethers.getContractFactory("Pods", signer);
  const daVinci = await daVinci_ctrt.attach(contractAddress);

  await daVinci.mint(5);
  console.log("Minted 5 daVinci Assets");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

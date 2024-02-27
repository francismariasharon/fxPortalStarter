const { ethers } = require("hardhat");
const { FXRootContractAbi } = require('../artifacts/FXRootContractAbi.js');
const ABI = require('../artifacts/contracts/daVinci.sol/daVinci.json');
require('dotenv').config();

async function main() {
 
  const networkAddress = 'https://ethereum-goerli.publicnode.com';
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const wallet = new ethers.Wallet(privateKey, provider);

  const [signer] = await ethers.getSigners();

  const daVinci_ctrt = await ethers.getContractFactory("daVinci");
  const daVinci = await daVinci_ctrt.attach('0x2C4Ce5c69D228DE4EEA86ef990de02bDAc5c3805');

  const fxRootAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  const approveTx = await daVinci.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log('daVinci Assets have been approved');

const daVinciID=[0,1,2,3,4];
  for (let i = 0; i < 5; i++) {
    const depositTx = await fxRoot.connect(signer).deposit(
      daVinci.address,
      wallet.address, 
      daVinciID[i],
      '0x6566'
    );

    await depositTx.wait();
  }

  console.log("daVinci assets have been deposited");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

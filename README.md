# DaVinci Transfer using FXportal

 This project is a representation of the transfer of 5 items from goerli testnet to mumbai testnet using FXportal bridge with 4 script files and 1 contract file deployed. 

 The images have been generated using DALLE and stored in ipfs using pinata cloud .

 ## Flow 

 - First we generate images from DALLE using the prompt-"A time-traveling robot playing chess with da Vinci."
 - We store the images in IPFS using pinata cloud.
 - We deploy the daVinci contract to goerli testnet.
 - We mint 5NFTs to goerli testnet.
 - We approve the assets for transfer
 - We deposit the assets to mumbai testnet.
 - We check the balance of the mumbai contract . 

### Steps for Bridging

1. Run npm i to install dependencies
2. Put your private key in the .env.examples file and rename to .env when finished
3. Run npx hardhat run scripts/deploy.js --network goerli to deploy ERC20 contract
4. Paste the newly deployed contract address in the tokenAddress variable for the other scripts
5. Make sure to fill in your public key
6. Run npx hardhat run scripts/mint.js --network goerli to mint tokens to your wallet
7. Run npx hardhat run scripts/approveDeposit.js --network goerli to approve and deposit your tokens to polygon
8. Wait 20-30ish minutes for tokens to show on polygon account
9. Use polyscan.com to check your account for the tokens. Once they arrive, you can click on the transaction to get the contract address for polygon.
10. Use this polygon contract address for your getBalance script's tokenAddress
11. Run npx hardhat run scripts/getBalance.js --network mumbai to see the new polygon balance


## Authors

Francis MS
[@francismariasharon@gmail.com]

## License

This project is licensed under the [MIT] License.

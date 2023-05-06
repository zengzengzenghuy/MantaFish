// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {


  const BIT = await hre.ethers.getContractFactory("BitToken");
  const NFT = await hre.ethers.getContractFactory("MANNFT");
  const AskAndEarn = await hre.ethers.getContractFactory("AskAndEarn");
  const bit = await BIT.deploy();
  await bit.deployed();

  const nft = await NFT.deploy();
  await nft.deployed();

  const askandearn = AskAndEarn.deploy([bit.address,nft.address]);
  await askandearn.deployed();

  console.log(
   `Contract deployed to:\n
   TestBitToken = ${bit.address}\n
   NFT = ${nft.address}\n
   AskAndEarn contract = ${askandearn.address}\n
   `
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

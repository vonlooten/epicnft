const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyEpicNFT", function () {
  it("Should deploy the epic nft", async function () {
    const MyEpicNFT = await ethers.getContractFactory("MyEpicNFT");
    const myEpicNFT = await MyEpicNFT.deploy();
    await myEpicNFT.deployed();

    expect(await myEpicNFT.makeAnEpicNFT()).to.satisfy;

  });
});

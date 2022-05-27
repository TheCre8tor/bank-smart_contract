// import { expect } from "chai";
import { ethers } from "hardhat";

describe("Bank", function () {
  it("Should return bank balance", async function () {
    const Bank = await ethers.getContractFactory("Bank");
    const bank = await Bank.deploy();
    await bank.deployed();

    const txn = await bank.getBankBalance();

    console.log(txn);
  });
});

// import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Bank = await ethers.getContractFactory("Bank");
    const bank = await Bank.deploy();
    await bank.deployed();

    const txn = await bank.getBankBalance();

    console.log(txn);
  });
});

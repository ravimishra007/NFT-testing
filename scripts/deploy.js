async function main() {
    try {
      const MyNFT = await ethers.getContractFactory("MyNFT");
  
      // Start deployment
      const myNFT = await MyNFT.deploy();
  
      // Wait for deployment to finish
      await myNFT.deployed();
  
      console.log("Contract deployed to address:", myNFT.address);
    } catch (error) {
      console.error("Error during contract deployment:", error);
    }
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error("Error:", error);
      process.exit(1);
    });
  
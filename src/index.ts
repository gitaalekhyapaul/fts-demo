import { search, sort } from "./binary.js";
import { getBalance } from "./eth-balance.js";
import { getTrait } from "./nft-trait.js";
const main = async () => {
  const input = [45, 56, 78, 1, 34, 98, 10];
  console.log("Task 1: Binary Search");
  console.log("Original Input:", input);
  sort(input);
  console.log("Sorted Input:", input);
  const query1 = 5;
  const result1 = search(input, query1);
  console.log("Search result 1:", result1);
  const query2 = 78;
  const result2 = search(input, query2);
  console.log("Search result 2:", result2);
  console.log("Task 2: Balance on Sepolia ETH");
  const wallet = "0xE3c2200996a83095099f2b8f69F39d1bBFa33456";
  console.log("Wallet input:", wallet);
  const bal = await getBalance(wallet);
  console.log(`Balance: ${bal} ETH`);
  console.log("Task 3: NFT Traits");
  const contractAddress = "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8";
  const tokenId = "3233";
  const traits = await getTrait(contractAddress, tokenId);
  console.log("All NFT Traits:", traits);
  const head = traits.find(
    (t: Record<string, string>) => t?.trait_type === "Head"
  );
  console.log("Head Trait:", head);
};

main()
  .then(() => console.log("All scripts OK"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

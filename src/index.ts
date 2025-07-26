import { search, sort } from "./binary.js";
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
};

main()
  .then(() => console.log("All scripts OK"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

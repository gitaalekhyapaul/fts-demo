import { providers, utils } from "ethers";

export const getBalance = async (add: string) => {
  const address = utils.getAddress(add);
  const provider = new providers.JsonRpcProvider("https://0xrpc.io/sep");
  const balance = await provider.getBalance(address);
  const balStr = utils.formatEther(balance);
  return balStr;
};

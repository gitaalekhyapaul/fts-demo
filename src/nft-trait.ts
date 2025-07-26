import { Alchemy, Network } from "alchemy-sdk";
import { utils } from "ethers";
export const getTrait = async (contractAddress: string, tokenId: string) => {
  const address = utils.getAddress(contractAddress);
  const alchemy = new Alchemy({
    network: Network.ETH_MAINNET,
  });
  const metadata = await alchemy.nft.getNftMetadata(address, tokenId);
  return metadata?.raw?.metadata?.attributes;
};

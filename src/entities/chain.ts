export enum ChainId {
  MAINNET = 1,
  GÖRLI = 5,
  MATIC = 137,
  MUMBAI = 80001,
  BSCTESTNET = 97,
  BSCMAINNET = 56,
  SOLANA = 101, //fake id
  COREDAO = 1116,
}

export function getChainType(chainId: ChainId) {
  if (chainId === ChainId.SOLANA) return ChainType.SOLANA
  return ChainType.EVM
}

export enum ChainType {
  EVM = 'EVM',
  SOLANA = 'SOLANA',
}

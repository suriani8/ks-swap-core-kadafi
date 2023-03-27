import { ChainId } from './chain'
import { Token } from './token'

export const WETH = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'WETH',
    'Wrapped Ether',
  ),
  [ChainId.BSCMAINNET]: new Token(
    ChainId.BSCMAINNET,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'WBNB',
    'Wrapped BNB',
  ),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, '0x48f6D7dAE56623Dde5a0D56B283165cAE1753D70', 18, 'WETH', 'Wrapped Ether'),
  [ChainId.MATIC]: new Token(
    ChainId.MATIC,
    '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    18,
    'WMATIC',
    'Wrapped Matic',
  ),
  [ChainId.MUMBAI]: new Token(
    ChainId.MUMBAI,
    '0x19395624C030A11f58e820C3AeFb1f5960d9742a',
    18,
    'WMATIC',
    'Wrapped Matic',
  ),
  [ChainId.BSCTESTNET]: new Token(
    ChainId.BSCTESTNET,
    '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    18,
    'WBNB',
    'Wrapped BNB',
  ),
  [ChainId.COREDAO]: new Token(
    ChainId.COREDAO,
    '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',
    18,
    'WCORE',
    'Wrapped CORE',
  ),
  [ChainId.SOLANA]: new Token(ChainId.SOLANA, 'So11111111111111111111111111111111111111112', 9, 'WSOL', 'Wrapped SOL'),
}

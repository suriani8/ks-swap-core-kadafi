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
  [ChainId.COREDAO]: new Token(
    ChainId.COREDAO,
    '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',
    18,
    'WCORE',
    'Wrapped CORE',
  ),
  [ChainId.SOLANA]: new Token(ChainId.SOLANA, 'So11111111111111111111111111111111111111112', 9, 'WSOL', 'Wrapped SOL'),
}

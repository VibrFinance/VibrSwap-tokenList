import { TokenSymbol } from "../symbols/tokenSymbol";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

const baseURL = 'https://vibrswap-finance.oss-ap-southeast-1.aliyuncs.com/tokens/';

export const tokens: TokenInfo[] = [
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDT,
        icon: baseURL + 'usdt.png',
        chains: [
            ChainId.BSCTestnet, 
        ],
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 6,
            },
        }
    },
]
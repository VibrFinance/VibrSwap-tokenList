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
        name: 'Neon Token',
        symbol: TokenSymbol.NEON,
        icon: baseURL + 'neon.png',
        chains: [
            ChainId.Neon
        ],
        contracts: {
            [ChainId.Neon]: {
                address: '0x202c35e517fa803b537565c40f0a6965d7204609', // WNEON
                decimal: 18,
            },
        },
    },
    {
        name: 'Wrapped Neon',
        symbol: TokenSymbol.WNEON,
        icon: baseURL + 'neon.png',
        chains: [
            ChainId.Neon
        ],
        contracts: {
            [ChainId.Neon]: {
                address: '0x202c35e517fa803b537565c40f0a6965d7204609',
                decimal: 18,
            },
        },
    },
    {
        name: 'USD Coin',
        symbol: TokenSymbol.USDC,
        icon: baseURL + 'usdc.svg',
        chains: [
            ChainId.Neon
        ],
        contracts: {
            [ChainId.Neon]: {
                address: '0xea6b04272f9f62f997f666f07d3a974134f7ffb9',
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDT,
        icon: baseURL + 'usdt.png',
        chains: [
            ChainId.Neon
        ],
        contracts: {
            [ChainId.Neon]: {
                address: '0x5f0155d08ef4aae2b500aefb64a3419da8bb611a',
                decimal: 6,
            },
        },
    },
    {
        name: "Wrapped BTC (Sollet)",
        symbol: TokenSymbol.BTC,
        icon: baseURL + 'wbtc.png',
        chains: [ChainId.Neon],
        contracts: {
            [ChainId.Neon]: {
                address: '0x54ecec9d995a6cbff3838f6a8f38099e518805d7',
                decimal: 6,
            },
        },
    },
    {
        name: "Wrapped Ether (Wormhole)",
        symbol: TokenSymbol.WETH,
        icon: baseURL + 'weth.png',
        chains: [ChainId.Neon],
        contracts: {
            [ChainId.Neon]: {
                address: '0xcffd84d468220c11be64dc9df64eafe02af60e8a',
                decimal: 8,
            },
        },
    },
    {
        name: "Wrapped SOL",
        symbol: TokenSymbol.SOL,
        icon: baseURL + 'sol.png',
        chains: [ChainId.Neon],
        contracts: {
            [ChainId.Neon]: {
                address: '0x5f38248f339bf4e84a2caf4e4c0552862dc9f82a',
                decimal: 9,
            },
        },
    },
]

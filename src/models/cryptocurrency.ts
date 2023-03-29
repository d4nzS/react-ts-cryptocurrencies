interface Cryptocurrency {
  id: string;
  rank: string;
  symbol: string
  name: string;
  explorer: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
}

export default Cryptocurrency;
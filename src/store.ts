
import { create } from "zustand";
import { CriptoPrice, Cryptocurrency, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { fetchCurrencyCriptoPrice, getCryptos } from "./services/CryptoService";


type CryptoStore = {
    cryptocurrencies:Cryptocurrency[] ,
    result: CriptoPrice,
    loading: boolean,
    fetchCryptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>
}




export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result: {} as CriptoPrice,
    loading: false,

    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos();

        set(() => ({
            cryptocurrencies
        }));
    },

    fetchData: async (pair) => {

        set(()=> ({
            loading: true
        }))

        const result = await fetchCurrencyCriptoPrice(pair)

        set(()=> ({
            result,
            loading: false
        }))
        
        
    }
})));
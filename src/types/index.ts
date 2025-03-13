import {z} from 'zod'
import {CryptoCurrencyResponseSchema, CryptoPriceSchema, CurrencySchema, PairSChema} from '../schema/crypto-schema'

export type Currency = z.infer<typeof CurrencySchema>
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSChema>
export type CriptoPrice = z.infer<typeof CryptoPriceSchema>
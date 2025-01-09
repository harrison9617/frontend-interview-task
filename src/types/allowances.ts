export type Allowance = {
  id: string
  name: string
  type: 'card' | 'expense'
  currency: 'GBP' | 'USD' | 'EUR'
  amount: number
  spent: number
  renewal: 'week' | 'month' | 'year'
  active: boolean
}

import React, { useEffect, useState } from 'react'
import { Allowance } from '@/types/allowances'
import Card from '../Card'

const List = () => {
  const [allowances, setAllowances] = useState<Allowance[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/allowances')
      const { result } = await response.json()
      setAllowances(result)
    }

    fetchData()
  }, [])

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-green-400 mb-7">Allowances</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allowances.map((allowance) => (
          <Card
            key={allowance.id}
            id={allowance.id}
            name={allowance.name}
            type={allowance.type}
            currency={allowance.currency}
            amount={allowance.amount}
            spent={allowance.spent}
            renewal={allowance.renewal}
            active={allowance.active}
          />
        ))}
      </div>
    </div>
  )
}

export default List

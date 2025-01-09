import React, { useEffect, useState } from 'react'
import { Allowance } from '@/types/allowances'

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
      <div>
        {allowances.map((allowance) => (
          <div key={allowance.id}>{JSON.stringify(allowance)}</div>
        ))}
      </div>
    </div>
  )
}

export default List

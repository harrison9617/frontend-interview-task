import { Allowance } from '@/types/allowances'
import React from 'react'
import StatusBar from '../StatusBar'
import useCalculatePercent from '@/hooks/useCalculatePercent'

const Card = ({
  id,
  name,
  type,
  currency,
  amount,
  spent,
  renewal,
  active,
}: Allowance) => {
  const percent = useCalculatePercent(spent, amount)

  return (
    <div
      id={id}
      className="border-[1px] rounded-lg flex flex-col justify-between gap-6"
    >
      <div className="px-5 pt-6">
        <p className="text-md font-medium text-gray-500 mb-3">{name}</p>
        <p className="text-sm text-gray-400">
          {type === 'card' && 'Spend Card'}
          {type === 'expense' && 'Expense'}
        </p>
      </div>
      {active ? (
        <div className="px-5 py-4">
          <StatusBar
            percent={percent}
            text={`
              ${Intl.NumberFormat('en-GB', {
                style: 'currency',
                currency: currency,
              }).format(amount)} / ${renewal}
            `}
          />
        </div>
      ) : (
        <div
          className="p-4 bg-gray-100 cursor-pointer"
          onClick={(id) =>
            console.log(
              `TODO: Send an UPDATE request to API to change allowance with an id of ${id} active status to ${!active}`
            )
          }
        >
          <p className="text-sm font-medium text-lime-500">Activate {type}</p>
        </div>
      )}
    </div>
  )
}

export default Card

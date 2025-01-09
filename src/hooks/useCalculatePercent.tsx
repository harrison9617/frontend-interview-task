import { useEffect, useState } from 'react'

export default function useCalculatePercent(
  numerator: number,
  denominator: number
) {
  if (denominator < 0) {
    throw new Error('denominator can not be less than 0')
  }

  const [percentage, setPercentage] = useState<number>(0)

  useEffect(() => {
    setPercentage((numerator / denominator) * 100)
  }, [numerator, denominator])

  return percentage
}

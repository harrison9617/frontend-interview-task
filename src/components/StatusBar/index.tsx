import React from 'react'

type Props = {
  percent: number
  text?: string
}

const StatusBar = ({ percent = 0, text = '' }: Props) => {
  return (
    <div className="">
      <div className="flex items-center justify-between text-sm font-medium mb-1">
        <p className="text-gray-500">{percent.toFixed()}% utilised</p>
        <p className="text-gray-300">{text}</p>
      </div>
      <div className="relative w-full h-1 bg-gray-200 rounded-xl">
        <div
          className={`absolute top-0 left-0 h-1 bg-lime-400 rounded-xl`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  )
}

export default StatusBar

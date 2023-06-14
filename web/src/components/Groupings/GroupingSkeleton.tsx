import { useState } from 'react'

import SummaryLabel, { SummaryLabelProps } from './SummaryLabel'

type GroupingSkeletonProps = {
  list: {
    alphaItem: SummaryLabelProps
    betaList: SummaryLabelProps[]
  }[]
  alphaFilter: string
  betaFilter: string
  updateFilter(level: 'alpha' | 'beta', label: string): void
}

const GroupingSkeleton = ({
  list,
  alphaFilter: alphaFilter,
  betaFilter: betaFilter,
  updateFilter,
}: GroupingSkeletonProps) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = (label: string) => {
    updateFilter('alpha', label)
    alphaFilter === label ? setIsOpen((d) => !d) : setIsOpen(true)
  }

  return (
    <div className="w-80">
      <ol>
        {list.map(({ alphaItem, betaList }) => (
          <li key={alphaItem.label}>
            <button
              className="text-left w-full"
              onClick={() => handleClick(alphaItem.label)}
            >
              <div
                className={`m-1 hover:brightness-75 ${
                  alphaFilter === alphaItem.label
                    ? 'bg-po-blue text-white'
                    : 'bg-gray-200'
                }`}
              >
                <SummaryLabel {...alphaItem} />
              </div>
            </button>

            {isOpen && alphaFilter === alphaItem.label && (
              <div className="flex">
                <div className="my-1 ml-1 w-2 rounded-full bg-po-blue" />
                <ol className="grow">
                  {betaList.map((item) => (
                    <li
                      key={item.label}
                      className={`m-1 hover:brightness-75 ${
                        betaFilter === item.label
                          ? 'bg-po-blue text-white'
                          : 'bg-gray-200'
                      }`}
                    >
                      <button
                        className="text-left w-full"
                        onClick={() => updateFilter('beta', item.label)}
                      >
                        <SummaryLabel {...item} />
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default GroupingSkeleton

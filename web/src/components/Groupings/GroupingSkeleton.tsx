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
    <ol>
      {list.map(({ alphaItem, betaList }) => (
        <li key={alphaItem.label}>
          <button
            className="w-full text-left"
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
            <div className="relative">
              <div className="bg-po-blue absolute bottom-0 top-0 my-1 ml-1 w-2 rounded-full" />
              <ol className="ml-3">
                {betaList.map((item) => (
                  <li key={item.label}>
                    <button
                      className="w-full text-left"
                      onClick={() => updateFilter('beta', item.label)}
                    >
                      <div
                        className={`m-1 hover:brightness-75 ${
                          betaFilter === item.label
                            ? 'bg-po-blue text-white'
                            : 'bg-gray-200'
                        }`}
                      >
                        <SummaryLabel {...item} />
                      </div>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}

export default GroupingSkeleton

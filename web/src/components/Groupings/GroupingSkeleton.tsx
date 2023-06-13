import { useState } from 'react'

import SummaryLabel, { SummaryLabelProps } from './SummaryLabel'

type GroupingSkeletonProps = {
  list: {
    topLevel: SummaryLabelProps
    secondLevelList: SummaryLabelProps[]
  }[]
  filterLevel1: string
  filterLevel2: string
  updateFilter(level: 'alpha' | 'bravo', label: string): void
}

const GroupingSkeleton = ({
  list,
  filterLevel1,
  filterLevel2,
  updateFilter,
}: GroupingSkeletonProps) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = (label: string) => {
    updateFilter('alpha', label)
    filterLevel1 === label ? setIsOpen((d) => !d) : setIsOpen(true)
  }

  return (
    <div className="w-80">
      <ol>
        {list.map((alpha) => (
          <li key={alpha.topLevel.label}>
            <button
              className="text-left w-full"
              onClick={() => handleClick(alpha.topLevel.label)}
            >
              <div
                className={`m-1 hover:brightness-75 ${
                  filterLevel1 === alpha.topLevel.label
                    ? 'bg-po-blue text-white'
                    : 'bg-gray-200'
                }`}
              >
                <SummaryLabel {...alpha.topLevel} />
              </div>
            </button>

            {isOpen && filterLevel1 === alpha.topLevel.label && (
              <div className="flex">
                <div className="my-1 ml-1 w-2 rounded-full bg-po-blue" />
                <ol className="grow">
                  {alpha.secondLevelList.map((item) => (
                    <li
                      key={item.label}
                      className={`m-1 hover:brightness-75 ${
                        filterLevel2 === item.label
                          ? 'bg-po-blue text-white'
                          : 'bg-gray-200'
                      }`}
                    >
                      <button
                        className="text-left w-full"
                        onClick={() => updateFilter('bravo', item.label)}
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

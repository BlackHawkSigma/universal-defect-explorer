import { useState } from 'react'

import GroupingSkeleton from './GroupingSkeleton'
import { standard, withPercent } from './SummaryLabel.mock'

export const Default = () => {
  const [filter1, setFilter1] = useState('Test 1')
  const [filter2, setFilter2] = useState('Fehler 1')

  const handleClick = (level: 'alpha' | 'bravo', label: string) => {
    switch (level) {
      case 'alpha':
        return setFilter1(label)
      case 'bravo':
        return setFilter2(label)
    }
  }

  return (
    <GroupingSkeleton
      list={[
        {
          topLevel: { ...standard(), label: 'Test 1' },
          secondLevelList: [
            { ...standard(), label: 'Fehler 1' },
            { ...withPercent(), label: 'Fehler 2' },
            { ...standard(), label: 'Fehler 3' },
          ],
        },
        {
          topLevel: { ...withPercent(), label: 'Test 2' },
          secondLevelList: [
            { ...standard(), label: 'Fehler 1' },
            { ...withPercent(), label: 'Fehler 2' },
            { ...standard(), label: 'Fehler 3' },
          ],
        },
        {
          topLevel: { ...standard(), label: 'Test 3' },
          secondLevelList: [
            { ...standard(), label: 'Fehler 1' },
            { ...withPercent(), label: 'Fehler 2' },
            { ...standard(), label: 'Fehler 3' },
          ],
        },
      ]}
      filterLevel1={filter1}
      filterLevel2={filter2}
      updateFilter={handleClick}
    />
  )
}

export default { title: 'Components/GroupingSkeleton' }

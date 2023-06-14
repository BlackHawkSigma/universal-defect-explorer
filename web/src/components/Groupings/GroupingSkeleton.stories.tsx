import { useState } from 'react'

import GroupingSkeleton from './GroupingSkeleton'
import { standard, withPercent } from './SummaryLabel.mock'

export const Default = () => {
  const [alphaFilter, setAlphaFilter] = useState('Artikel 1')
  const [betaFilter, setBetaFilter] = useState('Fehler 1')

  const handleClick = (level: 'alpha' | 'beta', label: string) => {
    switch (level) {
      case 'alpha':
        return setAlphaFilter(label)
      case 'beta':
        return setBetaFilter(label)
    }
  }

  return (
    <div className="w-80">
      <GroupingSkeleton
        list={[
          {
            alphaItem: { label: 'Artikel 1', count: 15, euros: '243,78€' },
            betaList: [
              { ...standard(), label: 'Fehler 1' },
              { ...withPercent(), label: 'Fehler 2' },
              { ...standard(), label: 'Fehler 3' },
            ],
          },
          {
            alphaItem: { ...withPercent(), label: 'Artikel 2' },
            betaList: [
              { ...standard(), label: 'Fehler 1' },
              { ...withPercent(), label: 'Fehler 2' },
            ],
          },
          {
            alphaItem: { ...standard(), label: 'Artikel 3' },
            betaList: [
              { ...standard(), label: 'Fehler 1' },
              { ...standard(), label: 'Fehler 3' },
            ],
          },
        ]}
        alphaFilter={alphaFilter}
        betaFilter={betaFilter}
        updateFilter={handleClick}
      />
    </div>
  )
}

export const LongLabels = () => {
  const [alphaFilter, setAlphaFilter] = useState('Artikel 1')
  const [betaFilter, setBetaFilter] = useState('Fehler 1')

  const handleClick = (level: 'alpha' | 'beta', label: string) => {
    switch (level) {
      case 'alpha':
        return setAlphaFilter(label)
      case 'beta':
        return setBetaFilter(label)
    }
  }

  return (
    <div className="w-52 overflow-x-clip border border-black">
      <GroupingSkeleton
        list={[
          {
            alphaItem: {
              label:
                'Lorem ipsum dolor sit amet. Vel eveniet galisum qui porro esse quo quasi eius.',
              count: 15,
              euros: '243,78€',
            },
            betaList: [
              {
                ...standard(),
                label:
                  'Lorem ipsum dolor sit amet. Vel eveniet galisum qui porro esse quo quasi eius.',
              },
              { ...withPercent(), label: 'Fehler 2' },
              { ...standard(), label: 'Fehler 3' },
            ],
          },
          {
            alphaItem: { ...withPercent(), label: 'Artikel 2' },
            betaList: [
              { ...standard(), label: 'Fehler 1' },
              { ...withPercent(), label: 'Fehler 2' },
            ],
          },
          {
            alphaItem: { ...standard(), label: 'Artikel 3' },
            betaList: [
              { ...standard(), label: 'Fehler 1' },
              { ...standard(), label: 'Fehler 3' },
            ],
          },
        ]}
        alphaFilter={alphaFilter}
        betaFilter={betaFilter}
        updateFilter={handleClick}
      />
    </div>
  )
}

export default { title: 'Components/GroupingSkeleton' }

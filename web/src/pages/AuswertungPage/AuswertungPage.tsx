import { useContext, useState } from 'react'

import type { Timeframe } from 'types/timeframe'

import { MetaTags } from '@redwoodjs/web'

import FehlersCell from 'src/components/FehlersCell'
import TimeframeSelector from 'src/components/TimeframeSelector'
import { setInitalTime } from 'src/utils/timeframe'

import { AuswertungContext } from '../../providers/context/AuswertungContext'

const AuswertungPage = () => {
  const [timeframe, setTimeframe] = useState<Timeframe>(() =>
    setInitalTime(new Date())
  )
  const { isLoading } = useContext(AuswertungContext)

  return (
    <>
      <MetaTags
        title="Auswertung"
        // description="Auswertung description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1 className="mb-6 text-center text-3xl font-heading">Auswertung</h1>
      <div>
        <TimeframeSelector
          initialTimeframe={setInitalTime(new Date())}
          disabled={isLoading}
          onChange={setTimeframe}
        />
      </div>

      <main className="mx-auto pt-4 px-12 bg-white shadow rounded-b">
        <FehlersCell
          start={timeframe.start.toISOString()}
          end={timeframe.end.toISOString()}
        />
      </main>
    </>
  )
}

export default AuswertungPage

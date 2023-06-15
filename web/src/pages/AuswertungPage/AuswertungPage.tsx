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
      <div className="m-2 lg:m-4">
        <h1 className="font-heading mb-2 text-center text-3xl">Auswertung</h1>
        <div>
          <TimeframeSelector
            initialTimeframe={setInitalTime(new Date())}
            disabled={isLoading}
            onChange={setTimeframe}
          />
        </div>
        <main className="mx-auto">
          <FehlersCell
            start={timeframe.start.toISOString()}
            end={timeframe.end.toISOString()}
          />
        </main>
      </div>
    </>
  )
}

export default AuswertungPage

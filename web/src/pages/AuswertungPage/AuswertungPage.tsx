import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import FehlersCell from 'src/components/FehlersCell'
import TimeframeSelector from 'src/components/TimeframeSelector'

import type { Timeframe } from 'types/timeframe'

const AuswertungPage = () => {
  const [timeframe, setTimeframe] = useState<Timeframe>(() => ({
    start: new Date(),
    end: new Date(),
  }))

  return (
    <>
      <MetaTags
        title="Auswertung"
        // description="Auswertung description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>Auswertung</h1>
      <div>
        <TimeframeSelector
          initialTimeframe={timeframe}
          onChange={setTimeframe}
        />
      </div>

      <main className="max-w-screen-2xl mx-auto p-12 bg-white shadow rounded-b">
        <FehlersCell
          start={timeframe.start.toISOString()}
          end={timeframe.end.toISOString()}
        />
      </main>
    </>
  )
}

export default AuswertungPage

import TimeframeSelector from './TimeframeSelector'
import { standart } from './TimeframeSelector.mock'

export const today = () => <TimeframeSelector {...standart()} />
export const loading = () => (
  <TimeframeSelector {...standart()} disabled={true} />
)

export default { title: 'Components/TimeframeSelector' }

import SummaryLabel from './SummaryLabel'
import { standard, withPercent } from './SummaryLabel.mock'

export const Default = () => {
  return (
    <div className="w-96 shadow">
      <SummaryLabel {...standard()} />
    </div>
  )
}
export const WithPercent = () => {
  return (
    <div className="w-96 shadow">
      <SummaryLabel {...withPercent()} />
    </div>
  )
}

export default { title: 'Components/SummaryLabel' }

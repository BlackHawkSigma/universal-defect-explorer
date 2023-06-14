import SummaryLabel from './SummaryLabel'
import { standard, withPercent, withoutEuros } from './SummaryLabel.mock'

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

export const WithoutEuros = () => {
  return (
    <div className="w-96 shadow">
      <SummaryLabel {...withoutEuros()} />
    </div>
  )
}

export default { title: 'Components/SummaryLabel' }

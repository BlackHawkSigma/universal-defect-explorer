import SkidPosition from './SkidPosition'
import { empty, standard } from './SkidPosition.mock'

export default {
  title: 'Components/SkidPosition',
}

export const leer = () => (
  <div className="w-96">
    <SkidPosition {...empty()} />
  </div>
)

export const generated = () => (
  <div className="w-96">
    <SkidPosition {...standard()} />
  </div>
)

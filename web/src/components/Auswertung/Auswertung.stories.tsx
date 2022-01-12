import Auswertung from './Auswertung'
import { standart } from './Auswertung.mock'

export const generated = () => {
  return <Auswertung {...standart()} />
}

export default { title: 'Components/Auswertung' }

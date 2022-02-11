import Artikels from './Artikels'
import { standard } from '../ArtikelsCell/ArtikelsCell.mock'

export const generated = () => {
  return <Artikels {...standard()} />
}

export default { title: 'Components/Artikels' }

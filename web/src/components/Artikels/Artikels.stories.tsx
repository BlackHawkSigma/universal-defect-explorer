import { standard } from '../ArtikelsCell/ArtikelsCell.mock'

import Artikels from './Artikels'

export const generated = () => {
  return <Artikels {...standard()} />
}

export default { title: 'Components/Artikels' }

import ArtikelForm from './ArtikelForm'
import { standart } from './ArtikelForm.mock'

export const form = () => {
  return (
    <div className="m-4">
      <ArtikelForm {...standart()} />
    </div>
  )
}

export default { title: 'Components/ArtikelForm' }

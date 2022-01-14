import FehlerTable from './FehlerTable'
import { standart } from './FehlerTable.mock'

export const generated = () => {
  return <FehlerTable {...standart()} />
}

export default { title: 'Components/FehlerTable' }

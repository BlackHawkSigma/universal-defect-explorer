import { Loading, Empty, Success } from './GridCell'
import { standart } from './GridCell.mock'

export const loading = () => (Loading ? <Loading /> : null)

export const empty = () => (Empty ? <Empty /> : null)

export const success = () => (Success ? <Success {...standart()} /> : null)

export default { title: 'Cells/GridCell' }

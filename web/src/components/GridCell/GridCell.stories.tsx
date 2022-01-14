import { Loading, Empty, Success } from './GridCell'
import { standard, noGeometrie } from './GridCell.mock'

export const loading = () => (Loading ? <Loading /> : null)

export const empty = () => (Empty ? <Empty /> : null)

export const success = () => (Success ? <Success {...standard()} /> : null)

export const noImage = () => (Success ? <Success {...noGeometrie()} /> : null)

export default { title: 'Cells/GridCell' }

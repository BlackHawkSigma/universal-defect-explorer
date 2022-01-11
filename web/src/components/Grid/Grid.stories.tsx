import Grid from './Grid'
import { standart } from './Grid.mock'

export const generated = () => <Grid {...standart()} />

export default { title: 'Components/Grid' }

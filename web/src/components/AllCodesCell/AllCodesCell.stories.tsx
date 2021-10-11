import { Loading, Empty, Failure, Success } from './AllCodesCell'
import { standard, singleCode } from './AllCodesCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success = () => {
  return Success ? <Success {...standard()} /> : null
}

export const sinlgeCode = () => {
  return Success ? <Success {...singleCode()} /> : null
}
export default { title: 'Cells/AllCodesCell' }

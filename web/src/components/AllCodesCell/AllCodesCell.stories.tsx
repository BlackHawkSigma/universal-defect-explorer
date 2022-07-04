import { Loading, Empty, Failure, Success } from './AllCodesCell'
import { standard, oneCode, twoCodes } from './AllCodesCell.mock'

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

export const singleCode = () => {
  return Success ? <Success {...oneCode()} /> : null
}

export const multipleCodes = () => {
  return Success ? <Success {...twoCodes()} /> : null
}

export default { title: 'Cells/AllCodesCell' }

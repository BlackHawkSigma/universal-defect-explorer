import { rollup } from 'd3'
import type { Record } from 'types/Record'

import DefectsPerSkid from 'src/components/DefectsPerSkid/DefectsPerSkid'

type Props = {
  list: Record[]
}

const DefectsPerSkidContainer = ({ list }: Props) => {
  const skids = rollup(
    list,
    (v) => v.length,
    (d) => d.skid
  )

  return (
    <div>
      <DefectsPerSkid skids={skids} />
    </div>
  )
}

export default DefectsPerSkidContainer

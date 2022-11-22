import { action } from '@storybook/addon-actions'

import DefectsPerSkid from './DefectsPerSkid'

const skids = new Map([
  [1, 3],
  [2, 4],
  [13, 20],
])

export const generated = () => {
  return (
    <div className="w-56">
      <DefectsPerSkid skids={skids} />
    </div>
  )
}

export const clickable = () => {
  const onClick = (skid: number) => {
    action(`Skid ${skid} selected`)
    console.log(skid)
  }
  return (
    <div className="w-56">
      <DefectsPerSkid skids={skids} onClick={onClick} />
    </div>
  )
}

export default { title: 'Components/DefectsPerSkid' }

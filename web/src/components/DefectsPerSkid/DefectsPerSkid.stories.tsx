import { action } from '@storybook/addon-actions'

import DefectsPerSkid from './DefectsPerSkid'

const skids = new Map([
  [1, 3],
  [2, 4],
  [13, 20],
])

export const generated = () => {
  return <DefectsPerSkid skids={skids} />
}

export const clickable = () => {
  const onClick = (skid: number) => {
    action(`Skid ${skid} selected`)
    console.log(skid)
  }
  return <DefectsPerSkid skids={skids} onClick={onClick} />
}

export default { title: 'Components/DefectsPerSkid' }

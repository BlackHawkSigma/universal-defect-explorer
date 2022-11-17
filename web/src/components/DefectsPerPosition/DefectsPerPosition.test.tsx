import { render } from '@redwoodjs/testing/web'

import DefectsPerPosition from './DefectsPerPosition'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const args = {
  partsPerSide: 6,
  sides: ['1', '2'],
  sumPerSide: new Map(),
  sumPerPosition: new Map(),
}

describe('DefectsPerPosition', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DefectsPerPosition {...args} />)
    }).not.toThrow()
  })
})

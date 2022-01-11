import { render } from '@redwoodjs/testing/web'

import Grid from './Grid'
import { standart } from './Grid.mock'

describe('Grid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Grid {...standart()} />)
    }).not.toThrow()
  })
})

import { render } from '@redwoodjs/testing/web'

import Grid from './Grid'
import { standard } from './Grid.mock'

describe('Grid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Grid {...standard()} />)
    }).not.toThrow()
  })
})

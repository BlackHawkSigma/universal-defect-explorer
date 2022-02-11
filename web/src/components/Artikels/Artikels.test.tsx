import { render } from '@redwoodjs/testing/web'

import Artikels from './Artikels'
import { standard } from '../ArtikelsCell/ArtikelsCell.mock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Artikels', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Artikels {...standard()} />)
    }).not.toThrow()
  })
})

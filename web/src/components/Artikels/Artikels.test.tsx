import { render } from '@redwoodjs/testing/web'

import { standard } from '../ArtikelsCell/ArtikelsCell.mock'

import Artikels from './Artikels'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Artikels', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Artikels {...standard()} />)
    }).not.toThrow()
  })
})

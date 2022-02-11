import { render } from '@redwoodjs/testing/web'

import ArtikelsLayout from './ArtikelsLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ArtikelsLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArtikelsLayout />)
    }).not.toThrow()
  })
})

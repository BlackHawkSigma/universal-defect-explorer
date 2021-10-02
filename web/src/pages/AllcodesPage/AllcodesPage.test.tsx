import { render } from '@redwoodjs/testing/web'

import AllcodesPage from './AllcodesPage'

describe('AllcodesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AllcodesPage />)
    }).not.toThrow()
  })
})

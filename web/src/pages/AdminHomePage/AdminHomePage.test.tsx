import { render } from '@redwoodjs/testing/web'

import AdminHomePage from './AdminHomePage'

describe('AdminHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminHomePage />)
    }).not.toThrow()
  })
})

import { render } from '@redwoodjs/testing/web'

import AuswertungPage from './AuswertungPage'

describe('AuswertungPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuswertungPage />)
    }).not.toThrow()
  })
})

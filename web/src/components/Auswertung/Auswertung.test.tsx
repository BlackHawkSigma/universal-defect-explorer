import { render } from '@redwoodjs/testing/web'

import Auswertung from './Auswertung'
import { standart } from './Auswertung.mock'

describe('Auswertung', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Auswertung {...standart()} />)
    }).not.toThrow()
  })
})

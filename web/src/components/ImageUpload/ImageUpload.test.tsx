import { render } from '@redwoodjs/testing/web'

import ImageUpload from './ImageUpload'
import { standart } from './ImageUpload.mock'

describe('ImageUpload', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageUpload {...standart()} />)
    }).not.toThrow()
  })
})

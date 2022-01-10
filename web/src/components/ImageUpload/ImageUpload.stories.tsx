import ImageUpload from './ImageUpload'
import { standart } from './ImageUpload.mock'

export const generated = () => {
  return <ImageUpload {...standart()} />
}

export default { title: 'Components/ImageUpload' }

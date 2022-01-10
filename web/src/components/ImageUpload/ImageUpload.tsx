import { FormEventHandler, useRef, useState } from 'react'

export type ImageUploadProps = {
  value: string
  onChange: (image: string) => void
}

/**
 * Die maximal zulässige Bildgröße beträgt 700*420 Pixel.
 */
const ImageUpload = ({ value, onChange }: ImageUploadProps) => {
  const [file, setFile] = useState<string>(value)
  const fileInput = useRef<HTMLInputElement>()

  const handleNewFile: FormEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()

    if (fileInput.current.files.length === 1) {
      const newFile = fileInput.current.files[0]
      const reader = new FileReader()

      reader.onload = ({ target }) => {
        const imageSrc = target.result as string

        const image = new Image()
        image.src = imageSrc
        image.onload = () => {
          setFile(imageSrc)
          onChange(imageSrc)
        }
      }

      reader.readAsDataURL(newFile)
    } else {
      setFile('')
    }
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        ref={fileInput}
        onChange={handleNewFile}
      />
      {file && <img src={file} alt="" />}
    </div>
  )
}

export default ImageUpload

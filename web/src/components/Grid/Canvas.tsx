import { useRef, useEffect, CSSProperties } from 'react'

import { max } from 'd3-array'
import { interpolateRgb } from 'd3-interpolate'
import { scaleLinear } from 'd3-scale'

import type { GridConfig, GridData, Selection } from 'types/grid'

export type CanvasProps = {
  image: string
  grid: GridConfig
  data: GridData[]
  active: Selection
  onSelect: (data: Selection) => void
}

const styles: CSSProperties = {
  cursor: 'pointer',
  width: 'fit-content',
  height: 'fit-content',
  imageRendering: 'crisp-edges',
}

const Canvas = ({
  image: imgSrc,
  grid,
  data,
  active,
  onSelect,
}: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // const [imgWidth, setImgWidth] = useState(0)
  // const [imgHeight, setImgHeight] = useState(0)
  const canvasHeight = grid.pixels * grid.rows + 1
  const canvasWidth = grid.pixels * grid.columns + 1

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const { clientX, clientY } = e

    const x = ((clientX - left) * canvasWidth) / width
    const y = ((clientY - top) * canvasHeight) / height

    const rect = {
      col: 1 + Math.floor(x / grid.pixels),
      row: 1 + Math.floor(y / grid.pixels),
    }

    onSelect(rect)
  }

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return

    // load Image
    const image = new Image()
    image.src = imgSrc

    // Main operation
    image.onload = () => {
      // const { width, height } = image
      // setImgWidth(width)
      // setImgHeight(height)

      // fill background white
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, canvasWidth, canvasHeight)

      // draw image
      ctx.globalAlpha = 0.4
      ctx.filter = 'grayscale(100%)'
      ctx.drawImage(image, 0, 0)

      // draw grid
      ctx.globalAlpha = 1
      ctx.filter = 'none'
      ctx.lineWidth = 1
      ctx.strokeStyle = 'gray'
      drawGrid(ctx, grid)

      // draw color gradient
      ctx.globalAlpha = 0.4
      const maxLabelValue =
        max<GridData, number>(data, (d: GridData) => +d.label) || 1

      data.forEach((point) => {
        const color = getColor(+point.label, maxLabelValue)
        drawRectWithColor(ctx, grid, point, color)
      })

      // activeRect
      ctx.globalAlpha = 0.7
      const actRect: GridData = { ...active, label: '' }
      drawRectWithColor(ctx, grid, actRect, 'steelblue')

      // draw text
      ctx.globalAlpha = 1
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.font = `bold 32px monospace`
      data.forEach((point) => drawSingleLabel(ctx, grid, point))
      drawSingleLabel(ctx, grid, actRect)
    }
  }, [active, data, grid, canvasWidth, canvasHeight, imgSrc])

  return (
    <canvas
      className="shadow-lg"
      style={styles}
      width={canvasWidth}
      height={canvasHeight}
      ref={canvasRef}
      onClick={handleClick}
    />
  )
}

const drawGrid = (
  ctx: CanvasRenderingContext2D,
  { rows, columns, pixels }: GridConfig
) => {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const x = col * pixels + 0.5
      const y = row * pixels + 0.5

      ctx.strokeRect(x, y, pixels, pixels)
    }
  }
}

const getColor = (value: number, maxValue: number): string => {
  const scale = scaleLinear().domain([0, maxValue]).range([0, 1])
  return interpolateRgb('yellow', 'red')(scale(value))
}

const drawRectWithColor = (
  ctx: CanvasRenderingContext2D,
  { pixels }: GridConfig,
  { col, row }: GridData,
  color: string
) => {
  const x = (col - 1) * pixels + 1
  const y = (row - 1) * pixels + 1
  const length = pixels - 1

  ctx.fillStyle = color
  ctx.fillRect(x, y, length, length)
}

const drawSingleLabel = (
  ctx: CanvasRenderingContext2D,
  { pixels }: GridConfig,
  { col, row, label }: GridData
) => {
  const x = col * pixels - pixels / 2
  const y = row * pixels - pixels / 2

  ctx.fillText(label, x, y, pixels)
}

export default Canvas

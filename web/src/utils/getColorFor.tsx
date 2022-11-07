import { interpolateRgb, scaleLinear } from 'd3'

export const getColorFor =
  (maxValue: number) =>
  (value: number): string => {
    const scale = scaleLinear().domain([0, maxValue]).range([0, 1])
    return interpolateRgb('#FFFF0080', '#FF000080')(scale(value))
  }

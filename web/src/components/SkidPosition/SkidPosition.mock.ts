import type { SkidPositionProps } from './SkidPosition'

export const standard = (): SkidPositionProps => {
  return {
    sides: 2,
    partsPerSide: 6,
    sumPerSide: new Map([
      [1, 3],
      [2, 7],
    ]),
    sumPerPosition: new Map([
      [1, 2],
      [5, 1],
      [9, 3],
      [12, 4],
    ]),
    onSetPos(_position) {},
    onSetSide(_side) {},
  }
}

export const empty = (): SkidPositionProps => {
  return {
    sides: 2,
    partsPerSide: 6,
    sumPerSide: new Map(),
    sumPerPosition: new Map(),
  }
}

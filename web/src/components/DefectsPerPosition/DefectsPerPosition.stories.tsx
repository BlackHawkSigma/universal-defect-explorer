import DefectsPerPosition, {
  DefectsPerPositionProps,
} from './DefectsPerPosition'

const args: DefectsPerPositionProps = {
  partsPerSide: 6,
  sides: ['1', '2'],
  sumPerSide: new Map(),
  sumPerPosition: new Map(),
}

export default { title: 'Components/DefectsPerPosition' }

export const empty = () => {
  return (
    <div className="w-96">
      <DefectsPerPosition {...args} />
    </div>
  )
}

export const sample = () => {
  return (
    <div className="w-96">
      <DefectsPerPosition
        {...args}
        {...{
          sumPerSide: new Map([
            ['1', 4],
            ['2', 4],
          ]),
          sumPerPosition: new Map([
            [1, 2],
            [5, 2],
            [12, 4],
          ]),
        }}
      />
    </div>
  )
}

export const longText = () => {
  return (
    <div className="w-96">
      <DefectsPerPosition
        {...args}
        {...{
          partsPerSide: 4,
          sumPerSide: new Map([['1', 4_000_000]]),
          sumPerPosition: new Map([[6, 'This is a very long label']]),
        }}
      />
    </div>
  )
}

type BlockProps = {
  position: number
  count?: string | number
  activePos?: number
  getColor: (value: number) => string
  onSetPos?: (position: number) => void
}

export const Block = ({
  position,
  count,
  activePos,
  getColor,
  onSetPos,
}: BlockProps) => {
  const backgroundColor = count ? getColor(+count) : undefined

  return (
    <button
      className={`flex justify-evenly rounded-sm p-1 text-lg ${
        onSetPos ? 'cursor-pointer' : ''
      } ${
        activePos === position ? 'bg-blue-500' : 'bg-blue-100/60'
      } hover:brightness-75`}
      style={{ backgroundColor }}
      onClick={onSetPos ? () => onSetPos(position) : undefined}
    >
      <small>{position}</small>
      <span className="flex-grow text-center">
        {count ? <b>{count}</b> : ''}
      </span>
    </button>
  )
}

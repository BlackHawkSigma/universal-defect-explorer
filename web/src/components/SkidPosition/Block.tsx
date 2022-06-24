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
    <div
      className={`flex justify-evenly rounded-sm p-1 text-lg ${
        onSetPos ? 'hover:brightness-75' : ''
      } ${activePos === position ? 'bg-blue-500' : 'bg-blue-100/60'}`}
      style={{ backgroundColor }}
      onClick={onSetPos ? () => onSetPos(position) : undefined}
      role={onSetPos ? 'button' : null}
      tabIndex={0}
      onKeyDown={onSetPos ? () => onSetPos(position) : undefined}
    >
      <small>{position}</small>
      <span className="flex-grow text-center">
        {count ? <b>{count}</b> : ''}
      </span>
    </div>
  )
}

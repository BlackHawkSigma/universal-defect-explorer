type SideProps = {
  side: number
  count?: number
  activeSide?: number
  onSetSide?: (side: number) => void
  children: JSX.Element[]
}

export const Side = ({
  side,
  count,
  activeSide,
  onSetSide,
  children,
}: SideProps) => (
  <div className={`${activeSide === side ? 'bg-blue-500' : ''}`}>
    <button
      className={`w-full min-w-max px-1 text-center text-2xl ${
        onSetSide
          ? 'cursor-pointer hover:bg-[rgb(173,216,230)]/60'
          : 'bg-blue-100/60'
      } hover:brightness-75`}
      onClick={onSetSide ? () => onSetSide(side) : undefined}
    >
      Seite {side} {count ? `(${count})` : ''}
    </button>
    <div className="mt-1 flex flex-col gap-1">{children}</div>
  </div>
)

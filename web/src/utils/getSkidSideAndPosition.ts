import { Record } from 'types/Record'

export const getSkidSideAndPosition = (
  record: Record,
  partsPerSide?: number
): { side?: number; position?: number } => {
  const { skidseite, skidposition } = record

  if (skidseite && skidposition) {
    return { side: skidseite, position: skidposition }
  }

  if (skidposition && partsPerSide > 0) {
    return {
      side: Math.ceil(skidposition / partsPerSide),
      position: skidposition,
    }
  }

  return {}
}

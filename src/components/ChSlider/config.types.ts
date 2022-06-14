enum Orientation {
  vertical = 'vertical',
  horizontal = 'horizontal'
}

export type SliderConfig = {
  start: number[]
  range: {
    min: number[]
    max: number[]
  }
  step?: number
  connect?: boolean[]
  margin?: number
  padding?: number | number[]
  limit?: number
  orientation: Orientation
  animate?: boolean
}

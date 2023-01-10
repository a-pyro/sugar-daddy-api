export interface Ingredient {
  name: string
  quantity: number
  unit: string
}

export type WithIdAndName = WithId & {
  name: string
}

type WithId = {
  _id?: string
}

import type { TypeModel } from './TypeModel'

export type TaskModel = {
  id: string
  name: string
  duration: number
  startDate: number
  completeDate: number | null
  interruptedDate: number | null
  type: TypeModel
}

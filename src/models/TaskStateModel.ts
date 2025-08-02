import type { TaskModel } from './TaskModel'
import type { TypeModel } from './TypeModel'

export type TaskStateModel = {
  tasks: TaskModel[]
  secondsRemaining: number
  formattedSecondsRemaining: string
  activeTask: TaskModel | null
  currentCycle: number // 1 a 8
  config: TypeModel
}

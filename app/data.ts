import LocalResource from '../lib/LocalResource'
import Entity from '../lib/Entity'
import Task from './Task'


export const tasks = new Entity(new LocalResource("tasks"), Task)


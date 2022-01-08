import LocalResource from '../lib/LocalResource'
import Entity from '../lib/Entity'
import Task from './Task'
import Tag from './Tag'


export const tasks = new Entity(new LocalResource("tasks"), Task)
export const tags = new Entity(new LocalResource("tags"), Tag)


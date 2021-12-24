import Repository from './Repository'
import Entity from './Entity'
import Instance from './Instance'




export const tasks = new Entity(new Repository('tasks'), Instance)

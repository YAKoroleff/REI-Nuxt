import Repository from './Repository'
import Entity from './Entity'
import Instance from './Instance'


const repo = new Repository()

export const tasks = new Entity(repo.resource("tasks"), Instance)


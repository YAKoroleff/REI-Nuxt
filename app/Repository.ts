import {reactive} from 'vue'

class Resource
{
    public cache = reactive({})
    //hotfix:Resource->Entity relation (1/3)
    private users: any = {}

    constructor (private tableName:string)
    {
        //client only
        if (typeof window !== "undefined") {
            let JSONdata = localStorage.getItem(this.tableName)
            this.cache = JSONdata ? JSON.parse(JSONdata) : {}
        }
    }

    public save ()
    {
        let JSONdata = JSON.stringify(this.cache)
        localStorage.setItem(this.tableName, JSONdata)
    }


    public get (entity, query)
    {
        let relevantKeys = []
        for(let key in this.cache)
            if (query(this.cache[key])) 
            {
                this.bindToEntity(key, entity)
            }
    }


    public create (entity, dataForItem)
    {
        let key = this.newKey()
        this.cache[key] = dataForItem
        this.save()
        this.bindToEntity(key, entity)
        return key
    }


    public delete (key)
    {
        //hotfix:Resource->Entity relation (2/3)
        this.users[key].forEach(user => user.removeInstance(key))
        delete this.users[key]

        delete this.cache[key]
        this.save()
    }


    private newKey ()
    {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    
    private bindToEntity (key, entity)
    {
        //hotfix:Resource->Entity relation (3/3)
        Array.isArray(this.users[key]) ? this.users[key].push(entity) : this.users[key] = [entity]
        entity.addInstance(key)
    }

}

export default class Repository
{

    public resource(tableName)
    {
        return new Resource(tableName)
    }

}

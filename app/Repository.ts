import {reactive} from 'vue'

export default class Repository
{
    public cache:any = reactive({ 1:{name: "Принять ванну"}, 2:{name: "Выпить чашечку кофе"} })
    private users: any = {}

    constructor (private tableName)
    {
        //client only
        if (typeof window !== "undefined") {
            let JSONdata = localStorage.getItem(this.tableName)
            this.cache = JSONdata ? JSON.parse(JSONdata) : {}
        }
    }

    init (entity, query)
    {
        let relevantKeys = []
        for(let key in this.cache)
            if (query(this.cache[key])) 
            {
                entity.addItem(key)
                this.addUser(key, entity)
            }
    }

    create (dataForItem, entity)
    {
        let key = this.newKey()
        this.cache[key] = dataForItem
        this.save()
        this.addUser(key, entity)
        return key
    }

    delete (key)
    {
        this.users[key].forEach(user => user.removeItem(key))
        delete this.users[key]
        delete this.cache[key]
        this.save()
    }

    save ()
    {
        let JSONdata = JSON.stringify(this.cache)
        localStorage.setItem(this.tableName, JSONdata)
    }

    newKey ()
    {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    addUser (key, entity)
    {
        Array.isArray(this.users[key]) ? this.users[key].push(entity) : this.users[key] = [entity]
        console.log(this.users)
    }

}

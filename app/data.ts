import {reactive} from 'vue'

//client only
if (typeof window !== "undefined") {}

class Repository
{
    public cache = { 1:{name: "Принять ванну"}, 2:{name: "Выпить чашечку кофе"} }

    constructor (private tableName)
    {

    }

    init (entity)
    {
        //load & cache data...
        setTimeout (() => 
        {
            let keys = [1, 2]
            keys.forEach(key => entity.addItem(key))
        }, 2000)
    }
}

class Entity
{
    public items = reactive({})
    constructor (private repository, private Item)
    {
        
    }

    get()
    {
        this.repository.init(this)
    }

    addItem(key)
    {
        console.log(`add ${key}`)
        this.items[key] = new this.Item(this.repository, key)
    }
}

class Item
{
    public data:any

    constructor (private repository, private key)
    {
        this.data = this.repository.cache[key]
    }

    get name()
    {
        return this.data.name
    }
}



export const tasks = new Entity(new Repository('tasks'), Item)
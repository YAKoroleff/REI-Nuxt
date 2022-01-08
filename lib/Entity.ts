import {reactive} from 'vue'

export default class Entity 
{
    public items = reactive({})

    constructor (private resource, private Instance) { }

    get(query = () => true)
    {
        this.resource.get(this, query)
    }

    create(dataForInstance)
    {
        let key = this.resource.create(this, dataForInstance)
        return this.items[key]
    }

    addInstance(key)
    {
        this.items[key] = new this.Instance(this.resource, key)
        return this
    }

    removeInstance (key)
    {
        delete this.items[key]
    }
}
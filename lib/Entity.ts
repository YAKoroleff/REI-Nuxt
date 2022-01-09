import {reactive} from 'vue'

interface InstanceCollection<Instance> {
    [key: string | number]: Instance
}

export default class Entity<Instance>
{
    public items:InstanceCollection<Instance> = reactive({})

    constructor (private resource, private CurrentInstance) { }

    get(query = () => true)
    {
        this.resource.get(this, query)
    }

    find (key):Instance
    {
        return new this.CurrentInstance(this.resource, key)
    }

    create(dataForInstance):Instance
    {
        let key = this.resource.create(this, dataForInstance)
        return this.items[key]
    }

    addInstance(key)
    {
        this.items[key] = new this.CurrentInstance(this.resource, key)
        return this
    }

    removeInstance (key)
    {
        delete this.items[key]
    }
}
import {reactive} from 'vue'

export default class Entity
{
    public items = reactive({})
    constructor (private repository, private Item)
    {
        
    }

    get(query = () => true)
    {
        this.repository.init(this, query)
    }

    create(dataForItem)
    {
        let key = this.repository.create(dataForItem, this)
        return this.addItem(key)
    }


    addItem(key)
    {
        this.items[key] = new this.Item(this.repository, key)
        return this.items[key]
    }

    removeItem (key)
    {
        delete this.items[key]
    }
}
export default class Instance
{
    public data:any
    //#repository: any

    constructor (private repository, private key)
    {
        //this.#repository = repository
        this.data = this.repository.cache[key]
    }

    //dependeces in a static

    get name()
    {
        return this.data.name
    }

    save()
    {
        this.repository.save()
    }

    delete()
    {
        this.repository.delete(this.key)
    }
}
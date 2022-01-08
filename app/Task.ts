import Instance from "~~/lib/Instance";

export default class Task extends Instance
{
        //dependeces in a static

        get name()
        {
            return this.data.name
        }
    
        set name(val)
        {
            this.data.name = val
        }
}
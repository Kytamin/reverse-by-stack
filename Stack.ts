
export class Stack<T> {
    container:T[]=[]
    push(item:T):void{
        this.container.push(item)
    }
    pop():T{
        return this.container.pop()
    }
}
class List<T> {
    private data: T[]

    constructor(...elements: T[]) {
        this.data = elements
    }

    add(element: T):void {
        this.data.push(element)
    }

    addMultiple(...elements: T[]): void{
        this.data.push(...elements)
    }

    getAll(): T[]{
        return this.data
    }

}

let numbers = new List<number>(1, 3, 4)
numbers.add(0)
numbers.addMultiple(5, 6, 7)
console.log(numbers.getAll())

let random = new List<number | string>(1, "2", 3, "3")
random.addMultiple("7", "10")

console.log("random.getAll()", random.getAll())

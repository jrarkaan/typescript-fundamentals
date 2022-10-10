"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
let numbers = new List(1, 3, 4);
numbers.add(0);
numbers.addMultiple(5, 6, 7);
console.log(numbers.getAll());
let random = new List(1, "2", 3, "3");
random.addMultiple("7", "10");
console.log("random.getAll()", random.getAll());

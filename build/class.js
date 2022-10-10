"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
class Admin extends User {
    constructor(name, age, phone) {
        super(name, age);
        this.read = true;
        this.write = false;
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
            phone: this.phone
        };
    }
    set email(value) {
        this._email = value;
    }
    get email() {
        return this._email;
    }
}
let admin = new Admin("Raka Janitra", 12, "1212121");
admin.email = "arkan.rka@gmail.com";
console.info(admin.getRole());
console.log(admin.email);

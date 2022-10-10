type typeAdmin = {
    read: boolean,
    write: boolean,
    phone: string
}

export class User {
    public name: string;

    constructor(name: string, public age: number) {
        this.name = name
    }

    setName(value: string): void {
        this.name = value;
    }

    getName(): string{
        return this.name
    }
}

class Admin extends User {
    private read: boolean = true;
    private write: boolean = false;
    public phone: string
    private _email: string = ""

    constructor(name: string, age: number, phone: string) {
        super(name, age);
        this.phone = phone
    }

    getRole(): typeAdmin {
        return {
            read: this.read,
            write: this.write,
            phone: this.phone
        }
    }

    set email(value: string) {
        this._email = value
    }

    get email(): string{
        return this._email
    }

}

let admin = new Admin("Raka Janitra", 12, "1212121");
admin.email = "arkan.rka@gmail.com"
console.info(admin.getRole())
console.log(admin.email)


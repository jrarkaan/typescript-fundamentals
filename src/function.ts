// type
function getName(): string{
    return "Raka"
}

function printName(): void {
    console.info("rkaa")
}

function multiPly(val1: number, val2: number): number{
    return val1 * val2
}

// function as type data

type Tambah = (va1: number, val2: number) => number;

const Add: Tambah = function(val1: number, val2: number): number{
    return val1 * val2
}

const fullName = (first: string, last: string = "Arkaan"): string => {
    return `${first} ${last}`
}

const getUmur = (val1: string, val2?: string):string =>{
    return `${val1} ${val2}`
}

console.info(Add(10, 5))
console.info(fullName("raka"))
console.info(getUmur("rakaa"))

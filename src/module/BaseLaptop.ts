import InterfaceLaptop from './InterfaceLaptop';
import { b, a } from './Keyboard';

abstract class BaseLaptop<Type> implements InterfaceLaptop<Type>{
    name: string
    type: any
    withNumeric: boolean
    withTouchButton: boolean

    constructor(
        name: string,
        type: Type,
        numeric: boolean,
        touchButton: boolean
    ) {
        this.name = name
        this.type = type
        this.withNumeric = numeric
        this.withTouchButton = touchButton
    }

    a(){
        return a()
    }

    b(){
        return b()
    }

}

export default BaseLaptop

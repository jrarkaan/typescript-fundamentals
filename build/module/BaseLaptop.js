"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Keyboard_1 = require("./Keyboard");
class BaseLaptop {
    constructor(name, type, numeric, touchButton) {
        this.name = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touchButton;
    }
    a() {
        return (0, Keyboard_1.a)();
    }
    b() {
        return (0, Keyboard_1.b)();
    }
}
exports.default = BaseLaptop;

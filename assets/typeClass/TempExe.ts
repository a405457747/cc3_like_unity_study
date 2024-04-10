import { _decorator, assert, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

class Anima {
    name = "";
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log("i am Anima " + this.name);
    }
}

class Dog extends Anima {

    constructor(name) {
        super(name);
    }

    printName(): void {
        super.printName();
        console.log("i am dog " + this.name);
    }

    chitu(): void {
        console.log("chitu");
    }
}


@ccclass('TempExe')
export class TempExe extends Component {
    start() {
        let o: { [key: string]: any } = {
            "a": 3,
            "b": 4,
        }
        console.log(o.a);
        console.log(o.b);
    }

    update(deltaTime: number) {

    }
}



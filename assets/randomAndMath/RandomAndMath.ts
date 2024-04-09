import { _decorator, Component, Node, math } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RandomAndMath')
export class RandomAndMath extends Component {
    start() {

        let print = console.log;
        for (let i = 0; i < 30; i++) {
            print(RandomAndMath.Range2(2, 5));
        }

    }

    static Range(min: number, max: number): number {
        let len: number = max - min;
        let v: number = Math.random() * len;
        let res: number = Math.floor(v);
        return res + min;
    }

    static Range2(min: number, max: number): number {
        let len: number = max - min;
        let v: number = Math.random() * len;

        return v + min;
    }
    update(deltaTime: number) {
        //var lerpedValue = math.lerp(0, 10,3 );
        //console.log(lerpedValue); 
    }
}



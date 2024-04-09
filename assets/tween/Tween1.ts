import { _decorator, Component, Node, tween, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Tween1')
export class Tween1 extends Component {
    start() {

        tween()
        .target(this.node)
        .to(1.0,{position:new Vec3(23,23,0)})
        .by(1.0,{position:new Vec3(5,5,0)})
        .delay(1.0)
        .start();
    }

    update(deltaTime: number) {
        
    }
}



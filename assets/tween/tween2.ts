import { _decorator, Component, Node, Sprite, tween, Vec3,Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('tween2')
export class tween2 extends Component {
    start() {
        console.log("hello");
        tween()
            .target(this.node)
            .by(2,{position:new Vec3(50,50,0)})
            .start();

        tween()
            .target(this.node.getComponent(Sprite))
            .to(2,{color:Color.RED})
            .start();
    }

    update(deltaTime: number) {
        
    }
}



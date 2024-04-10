import { _decorator, Component, input, Node,EventTouch, Input, Vec3,Tween, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CameraMove')
export class CameraMove extends Component {



    @property(Node) camera=null;

    start() {
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
    }

    onTouchStart(event: EventTouch) {
        console.log("start");

        tween()
        .target(this.camera)
        .by(0.5, { position: new Vec3(0, 10, 0) })
        .by(0.5, { position: new Vec3(0, -10, 0) })
        .start();
    }

    update(deltaTime: number) {
        
    }
}



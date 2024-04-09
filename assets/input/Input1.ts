import { _decorator, Component, KeyCode, SystemEvent, EventMouse, input, Input, EventTouch, Node, EventKeyboard, System } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Input1')
export class Input1 extends Component {
    onLoad() {
        // input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);

        // input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        // input.on(Input.EventType.KEY_UP, this.onKeyUp, this);

        input.on(Input.EventType.MOUSE_MOVE, this.onMouseMove, this);
    }

    onDestroy() {
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);

    }
    onMouseMove(event: EventMouse) {
        // 获取鼠标位置
        const mousePos = event.getLocation();
        console.log('Mouse position:', mousePos.x, mousePos.y);
    }


    onTouchStart(event: EventTouch) {
        console.log(event.getLocation());  // Location on screen space
        console.log(event.getUILocation());  // Location on UI space
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                console.log('Press a key');
                break;
        }
    }

    onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                console.log('Release a key');
                break;
        }
    }
}



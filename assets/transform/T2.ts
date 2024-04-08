import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('T2')
export class T2 extends Component {
    onLoad() {
        this.node.on("custom_event_name",this.custom_event_name);
    }

    update(deltaTime: number) {
        
    }

    custom_event_name(){
        console.log("i am t2 custom_event_name");
    }
}



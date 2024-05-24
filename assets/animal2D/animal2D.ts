import { _decorator, animation, Component, Node ,Animation,AnimationState} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('animal2D')
export class animal2D extends Component {
    anim:Animation=null;
    onLoad() {
        this.anim=this.getComponent(Animation);

        this.anim.play("topbottom");

        this.anim.on(Animation.EventType.FINISHED, this.onAnimationEvent, this)
    }

    onAnimationEvent(type: Animation.EventType, state: AnimationState) {
         console.log("anim over");
    }

    update(deltaTime: number) {
        
    }
}



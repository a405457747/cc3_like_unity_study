import { _decorator, Component, SpriteFrame,Node, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Other')
export class Other extends Component {

    @property
    hp=32;

    @property({ type: SpriteFrame,visible:false })
    ssk=null;

    start() {
        this.schedule((dt:number) => {
            console.log("dt"+dt.toString());
        });
    }

    update(deltaTime: number) {
        
    }
}



import { _decorator, Component, Node, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpHpSlider')
export class SpHpSlider extends Component {
    sp: Sprite;
    start() {

        this.sp =this.getComponent(Sprite);
        
    }

    update(deltaTime: number) {
        this.sp.fillRange+=deltaTime;
        if(this.sp.fillRange>=1){
            this.sp.fillRange=0;
        }
    }
}



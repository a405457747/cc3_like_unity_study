import { _decorator, Component, Node, resources, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Other3')
export class Other3 extends Component {
    start() {

        resources.load("22",SpriteFrame,(e,a)=>{
           this.init();
        })
    }

    init(){
        let state=1;
        if(state!=1)return;
        console.log("initGAme");
    }

    update(deltaTime: number) {
        
    }
}



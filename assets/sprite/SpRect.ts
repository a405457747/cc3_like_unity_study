import { _decorator, Component, Node, Sprite, SpriteFrame,Rect } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SpRect')
export class SpRect extends Component {
    start() {
        const sp =this.node.getComponent(Sprite);
        sp.spriteFrame.rect=new Rect(0,0,90,90);
    }

    update(deltaTime: number) {
        
    }
}



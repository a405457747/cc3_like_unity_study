import { _decorator, Component,SpriteFrame, Node,assetManager,Sprite, resources } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ResLoad')
export class ResLoad extends Component {
    start() {
        // assetManager.resources.load("laser",(err,res)=>{
        //     if(err) return;
        //     console.log(res);
        // })
        // console.log("nihao");

        /*
        resources.load("extra",(err,res)=>{
            let sp =this.node.getComponent(Sprite);
            sp.spriteFrame=res as SpriteFrame;
            console.log("res",res);
        });
        */
    }

    update(deltaTime: number) {
        
    }
}



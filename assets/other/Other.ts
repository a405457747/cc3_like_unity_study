import { _decorator, Component, SpriteFrame,Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Other')
export class Other extends Component {

    dk=555;

    @property(Vec3)
    v3=new Vec3(0,0,0)

    @property([SpriteFrame])
    kkkw=[]

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



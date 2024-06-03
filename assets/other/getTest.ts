import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('getTest')
export class getTest extends Component {
    @property(Label)
    la:Label|null=null;
    start() {

        this.node.on("ch",this.ch,this);

  
    }

    ch(obj){

        this.la.string="hp:"+obj;
    }

    update(deltaTime: number) {
        
    }
}



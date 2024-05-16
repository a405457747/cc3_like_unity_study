import { _decorator, Component, Director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('API')
export class API extends Component {
    start() {
     let s =Director.instance.getScene();
   //  console.log(s);
     let a=this.node.getChildByName("a");
     //console.log(a);

     let a2 =Director.instance.pause();
     let b2 =Director.instance.resume();
     let b3 =Director.instance.end();
    }

    update(deltaTime: number) {
        
    }
}



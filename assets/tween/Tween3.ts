import { _decorator, Component, Node,Tween,tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;



@ccclass('Tween3')
export class Tween3 extends Component {

    private t:Tween<Node>=null;
    start() {
   this.t=   tween(this.node)
      .to(1,{position:new Vec3(100,0,0)})
      .to(1,{position:new Vec3(-100,0,0)})
      .union()
      .repeatForever()
      .start();

      setTimeout(() => {
        this.t.stop();
      }, 2000);
    }

    update(deltaTime: number) {
        
    }
}



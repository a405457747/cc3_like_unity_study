import { _decorator, Component, Node,Tween,tween, Vec3 } from 'cc';
import { tween2 } from './tween2';
const { ccclass, property } = _decorator;

interface KK {
  JJ();
}

@ccclass('Tween3')
export class Tween3 extends Component {

    private t:Tween<Node>=null;

    private t2:Tween<Node>=null;

    private t3:tween2=null;

    start() {
      
      console.log("hello2:"+Infinity);
   this.t=   tween(this.node)
      .to(5,{position:new Vec3(100,0,0)});
    this.t2=tween(this.node)
      .to(5,{position:new Vec3(-100,0,0)});

      this.t.then(this.t2)
      .start();

     let k:string= this.add<string>("3");
     let k2:number=this.add<number>(3);
      /*
      setTimeout(() => {
        this.t.stop();
      }, 2000);
      */
    }

    add<KK>(a:KK):KK{
      return a;
    }

    JJ(){
      return 3;
    }

    protected onDisable(): void {
      this.t.stop();
      console.log("dis");      
    }

    protected onEnable(): void {
      console.log("ena");      
    }

    update(deltaTime: number) {
        
    }
}



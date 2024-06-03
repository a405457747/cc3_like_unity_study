import { _decorator, CCInteger, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('getSet4')
export class getSet4 extends Component {

    _hp:number=5;
    get hp(){
        return this._hp;
    }
    set hp(val){
        this._hp=val;
        this.node.emit("ch",this._hp);
    }

    start() {
        /*这才是非常不错的写法
        if(this.hp!==3){
            this.hp=100;
        }
        */

        /* 写法完全正确
        this.scheduleOnce(()=>{
            this.hp-=1;
        },1);
        this.scheduleOnce(()=>{
            this.hp-=2;
        },3);

        this.scheduleOnce(()=>{
            this.hp-=1;
        },5);

        this.scheduleOnce(()=>{
            console.log(this._hp);
        },10);
        */
    }

    update(deltaTime: number) {
        

    }
}



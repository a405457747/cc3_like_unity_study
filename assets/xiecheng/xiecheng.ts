import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('xiecheng')
export class xiecheng extends Component {
    private 年龄:number=333;
    start() {
        console.log(this.年龄);
        this.a()
        .then((d)=>{
            console.log(d);
        })
        .then(this.b)
        .then((d)=>{
            console.log(d);
        });
     
    }

    a(){
        return new Promise((r,j)=>{
            setTimeout(()=>{
                //console.log("a over");
                r(33);
            },1000)
        });
    }
    b(){

        return new Promise((r,j)=>{
            setTimeout(()=>{
                //console.log("b over");
                r(44);
            },2000)
        });
    }
    c(){

        return new Promise((r,j)=>{
            setTimeout(()=>{
               // console.log("c over");
                r(55);
            },1000)
        });
    }

    gg(a: number,b: boolean): any{
        return a+Number(b);
    }

}



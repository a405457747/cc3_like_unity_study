import { _decorator, Component, Node ,find} from 'cc';
const { ccclass, property } = _decorator;




@ccclass('Btn')
export class Btn extends Component {
    start() {
        console.log(332);
    }

    update(deltaTime: number) {
        
    }

    click(e,data){
        console.log(e.target.name);
    }

    /*

    fire(){
        if(this.gameState!=0) return;
        this.gameState=1;
        twee().to().start();
    }

    */
}



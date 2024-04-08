import { _decorator, Component, Director, Game, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('App1')
export class App1 extends Component {
    start() {
     Director.instance.pause();
     Director.instance.resume();

     Director.instance.loadScene("ui1");
    }

    onSceneLaunched(){
        console.log("load scene susccess");
    }

    update(deltaTime: number) {
        console.log("nnn");
    }
}



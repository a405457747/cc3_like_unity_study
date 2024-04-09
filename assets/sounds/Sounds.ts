import { _decorator, AudioSource, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Sounds')
export class Sounds extends Component {

    @property(AudioSource)
    bg=null;

    @property(AudioSource)
    ss:AudioSource=null;


    start() {
        this.ss.playOneShot(this.ss.clip,0.1);
        //this.bg.play();
    }

    update(deltaTime: number) {
        
    }
}



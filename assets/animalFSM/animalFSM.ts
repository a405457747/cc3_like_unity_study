import { _decorator, Component, Node ,animation} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('animalFSM')
export class animalFSM extends Component {

    @property(animation.AnimationController)
    ccc:animation.AnimationController|null = null;

    start() {
    this.ccc.setValue("wok",5);

    }

    update(deltaTime: number) {
        
    }
}



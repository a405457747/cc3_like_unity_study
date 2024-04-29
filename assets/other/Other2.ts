import { _decorator, Component, Label, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Other2')
export class Other2 extends Component {

    @property(Label)
    label:Label=null

    start() {
        console.log("a",{a:3},true,22);
    }

    update(deltaTime: number) {
        let post:Vec3 =this.label.node.position;
        post.y+=30;
        this.label.node.position=post;

    }
}



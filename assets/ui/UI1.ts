import { _decorator, Button, Component, Node, RichText, Slider, Sprite, Toggle, UIOpacity } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UI1')
export class UI1 extends Component {

    @property(Slider)
    public sl:Slider|null =null;

    @property(Toggle)
    public toggle:Toggle|null =null;

    @property(RichText)
    public rText:RichText=null;

    @property(Sprite)
    public pSp:Sprite=null;

    start() {

        //this.sl.progress=0.25;

        //this.node.on("click", this.click);

        //this.toggle.isChecked=false;

        // this.rText.string="hello world 卧室你爹";
        // this.rText.fontSize=25;
        // this.rText.node.active=false;
        // this.rText.enabled=false;

        // this.pSp.spriteFrame=null;
        // this.pSp.node.active=false;

        this.pSp.getComponent(UIOpacity).opacity=20;
        
    }

    click() {
        console.log("btn press");
        this.node.getComponent(Button).interactable = false;
    }

    update(deltaTime: number) {

    }
}



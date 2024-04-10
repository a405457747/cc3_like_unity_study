import { _decorator, Component, Node,EditBox } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('InputGet')
export class InputGet extends Component {
    @property(EditBox)
    editbox: EditBox | null = null;
    onLoad(){
        this.editbox.node.on('editing-did-ended', this.callback, this);
    }

    callback(editbox: EditBox){

        console.log("content is ",this.editbox.string);
        // 回调的参数是 editbox 组件，注意这种方式注册的事件，无法传递 customEventData
    }
}



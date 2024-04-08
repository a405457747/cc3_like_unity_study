import { _decorator, Component, Sprite, Node, Vec3, find, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Transform1')
export class Transform1 extends Component {
    start() {

        //  let obj:Node|null=  this.node.getChildByName("nihaoNode");
        //  console.log(obj,typeof obj);

        //  let obj2:Node|null =this.node.getChildByPath("nihaoNode");
        //  let arr:Node[]|null =obj2?.children;
        //  for(let i =0;i<arr.length;i++){
        //     let item =arr[i];
        //     console.log(item.name);
        //  }
        //  console.log(arr?.length,arr[1]);

        // let obj2:Node|null =this.node.getChildByPath("nihaoNode");
        // let n:Node =obj2.children[1];
        // let n_parent:Node= n.parent;
        // console.log(n_parent.right);

        // let obj2:Node|null =this.node.getChildByPath("nihaoNode");
        // let obj3 =obj2.children[1];
        // console.log(obj3.position);
        // console.log(obj3.getWorldPosition());


        // let obj2=this.node.getChildByPath("nihaoNode");
        // obj2.active=false;

        // let obj2=this.node.getChildByPath("nihaoNode");
        // console.log(obj2.getWorldScale());
        // console.log(obj2.scale);


        // let k = this.node.getComponentsInChildren(Node)
        // console.log(k.length)

        //this.node.destroy();

        //instantiate(this.node);

        // this.node.active=false;
        // console.log(this.node.activeInHierarchy);
        // console.log(this.node.children[0].activeInHierarchy);
    
        //this.enabled=true;

        //let sp =this.node.getComponent(Sprite);
        //sp.enabled=false;
       
        // this.node.on("custom_event_name",this.custom_event_name);
        // this.node.emit('custom_event_name');

        console.log("i am t1 Start");
    }

    protected onLoad(): void {
        console.log("i am t1 onLoad");
    }

    protected onEnable(): void {
        console.log("i am t1 onEnable");
    }

    protected onDisable(): void {
        console.log("i am t1 onDisable");
    }


    custom_event_name(){
        console.log("i am t1 custom_event_name");
    }

    update(deltaTime: number) {
        // let pos:Vec3 =this.node.getPosition();
        // pos=pos.add( new Vec3(1,1,0));
        // this.node.setPosition(pos);

        // let obj =find("Canvas/Camera/SpriteRenderer");
        // this.node.lookAt(obj.position);
        // if(obj){
        //     console.log("1");
        // }

        //console.log(this.enabled);

    }
}



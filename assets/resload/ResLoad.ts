import { _decorator, Component,SpriteFrame,Prefab, Node,Sprite,TextAsset,AudioClip, resources, RichText, JsonAsset, AudioSource, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ResLoad')
export class ResLoad extends Component {


    @property(RichText)
    rt:RichText|null=null;

    @property(Sprite)
    sp:Sprite|null=null;

    @property(AudioSource)
    aus:AudioSource|null=null;

    start() {
        // assetManager.resources.load("laser",(err,res)=>{
        //     if(err) return;
        //     console.log(res);
        // })
        // console.log("nihao");

        /*
        resources.load("extra",(err,res)=>{
            let sp =this.node.getComponent(Sprite);
            sp.spriteFrame=res as SpriteFrame;
            console.log("res",res);
        });
        */
       
        // this.loadText("h副本",(txt)=>{
        //     this.rt.string=txt;
        // } )


        // this.loadJson("hh",(json)=>{
        //     console.log(json.aa);
        //     console.log(json.bb);
        // })

        // this.loadSprite("player",(sp)=>{
        //     this.sp.spriteFrame=sp;
        // });


        // this.loadPrefab("SpPrefab",(prefab)=>{
        //    let n= instantiate(prefab);
        //    this.node.addChild(n);
        // })

        
        this.loadAudioClip("laser",(clip)=>{
            this.aus.clip=clip;
            this.aus.play();
        })
    }

    loadText(filePath,func){
        resources.load(filePath, TextAsset, function (err, asset) {
            if(err) return;
            func(asset.text);
        });
    }

    loadJson(filePath,func){
        resources.load(filePath, JsonAsset, function (err, asset) {
            if(err) return;
            func( asset.json);
        });
    }

    loadSprite(filePath,func){
        resources.load(filePath, SpriteFrame, function (err, asset:SpriteFrame) {
            if(err) {
                console.log("load sp error");
                return;
            }
            func(asset);
        });
    }

    loadAudioClip(filePath,func){
        resources.load(filePath, AudioClip, function (err, asset) {
            if(err) return;
            func( asset);
        });
    }

    loadPrefab(filePath,func){
        resources.load(filePath, Prefab, function (err, asset) {
            if(err) return;
            func( asset);
        });
    }

    update(deltaTime: number) {
        
    }
}



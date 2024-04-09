import { _decorator, Component, Director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TimeAndScedule1')
export class TimeAndScedule1 extends Component {
    start() {

        // this.schedule(() => {
        //     console.log(Director.instance.getTotalTime())
        // }, 1, 2, 1);

        // this.scheduleOnce(()=>{
        //     console.log(Director.instance.getTotalTime());
        // },2)


        this.schedule(this.gogo,1,0,1);
        this.unschedule(this.gogo);
    }

    gogo(){
        console.log("gogo");
    }

    update(deltaTime: number) {
        var totalTime = Director.instance.getTotalTime();
        //console.log(totalTime);
        
    }
}



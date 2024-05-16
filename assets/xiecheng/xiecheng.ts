import { _decorator, Component, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('xiecheng')
export class xiecheng extends Component {
    private 年龄: number = 333;

    // 模拟获取用户数据的函数
    fetchUserData(userId,time:number=500) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const userData = {
                    id: userId,
                    username: 'example_user',
                    email: 'user@example.com'
                };
                resolve(userData);
            }, time); // 模拟获取用户数据需要 1.5 秒
        });
    }

    // 模拟获取帖子数据的函数
    fetchPostData(userId,time:number=500) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const postData = [
                    { id: 1, title: 'Post 1', body: 'This is the body of post 1.' },
                    { id: 2, title: 'Post 2', body: 'This is the body of post 2.' }
                ];
                resolve(postData);
            }, time); // 模拟获取帖子数据需要 1 秒
        });
    }



    start() {

        this.test4();
    }

    test4() {
   
        /*
        Promise.all([this.fetchUserData(123), this.fetchPostData(123)])
            .then(([userData, postData]) => {
                console.log( userData);
                console.log(postData);

            })
            .catch(error => {
                console.error('获取数据失败：', error);
            });
            */

        Promise.all([this.fetchUserData(123,3000),this.fetchPostData(123,3000)])
        .then(([userData, postData]) =>{
            console.log(userData);
            console.log(postData);
        })
        .catch(error =>{
            console.error('获取数据失败：',error);
        })

    }

    test2() {
        this.dd()
            .then((d) => {
                console.log(d);
                return this.dd2();
            })
            .then((d) => {
                console.log(d);
            })
    }

    dd() {
        return new Promise((re) => {
            tween(this.node)
                .to(5, { position: new Vec3(10, 0, 0) })
                .call(re).start();
        });

    }
    dd2() {
        return new Promise((re) => {
            tween(this.node)
                .to(5, { position: new Vec3(0, 10, 0) })
                .call(re).start();
        });

    }

    test1() {
        console.log(this.年龄);
        this.a()
            .then((d) => {
                console.log(d);
            })
            .then(this.b)
            .then((d) => {
                console.log(d);
            });
    }

    a() {
        return new Promise((r, j) => {
            setTimeout(() => {
                //console.log("a over");
                r(33);
            }, 1000)
        });
    }
    b() {

        return new Promise((r, j) => {
            setTimeout(() => {
                //console.log("b over");
                r(44);
            }, 2000)
        });
    }
    c() {

        return new Promise((r, j) => {
            setTimeout(() => {
                // console.log("c over");
                r(55);
            }, 1000)
        });
    }

    gg(a: number, b: boolean): any {
        return a + Number(b);
    }

}



/**
 * Created by purelightme on 2018/1/9.
 */
const { QQ } = require('qq-bot-rebown');

const qq = new QQ();

// 设置 “收到消息” 事件监听
qq.on('msg', (msg) => {
    console.log(JSON.stringify(msg));
});

// 设置 “收到好友消息” 事件监听
qq.on('buddy', (msg) => {
    qq.sendBuddyMsg(msg.id, `Hello, ${msg.name}`);
});

qq.on('group',(msg) => {

});

// 不要忘记启动 :)
qq.run();
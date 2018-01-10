/**
 * Created by purelightme on 2018/1/9.
 */
const {QQ} = require('qq-bot-rebown');
const config = require('./config/config');

const qq = new QQ({cookiePath: './qqbot.cookie'});

let self;

qq.on('login-success', () => {
    qq.getSelfInfo()
        .then((info) => {
            console.log("自己的信息：" + JSON.stringify(info));
            self = info;
        }, (err) => {
            console.log("出错了：" + err);
        })
});

// 设置 “收到消息” 事件监听
qq.on('msg', (msg) => {

});

// 设置 “收到好友消息” 事件监听
qq.on('buddy', (msg) => {
    qq.sendBuddyMsg(msg.id, `${msg.name}：${msg.content}`);
});

qq.on('group', (msg) => {
    if (msg.groupName != config.groupName) {
        return;
    }
    if (msg.id == config.qqNumber) {
        return;
    }
    qq.sendGroupMsg(msg.groupId, `${msg.name}：${msg.content}`)
});

// 不要忘记启动 :)
qq.run();

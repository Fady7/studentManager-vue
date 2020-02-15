import Vue from 'vue'
import toast from './toast.vue'
const Toast = Vue.extend(toast);
const types = {
    success: "√",
    fail: '×',
    info: '!'
}
export default function ({
    type,
    msg,
    duration
} = {
    type: 'success',
    msg: '成功',
    duration: 2000
}) {
    const app = new Toast({
        el: document.createElement('div'),
        data: {
            typeValue: types[type],
            msg,
            type
        }
    });
    document.body.appendChild(app.$el);
    setTimeout(() => {
        app.show = false;
    }, duration);
    setTimeout(() => {
        app.flag = false;
    }, duration - 200);
}
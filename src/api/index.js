import Axios from 'axios'
import URLs from './URLs'
const appkey = 'Fady_1574257051264';
const request = Axios.create({
    baseURL: URLs.baseURL,
    params: {
        appkey
    }
})

function findByPage(page, size) {
    return request.get(URLs.findByPage, {
        params: {
            page,
            size
        }
    })
}

function upDateStu(options) {
    return request.get(URLs.updateStu, {
        params: {
            ...options
        }
    })
}

function searchStu(options) {
    return request.get(URLs.searchStu, {
        params: {
            ...options
        }
    })
}

function delStu(sNo) {
    return request.get(URLs.delStu, {
        params: {
            sNo
        }
    })
}

function addStu(options) {
    return request.get(URLs.addStu, {
        params: {
            ...options
        }
    })
}

export default {
    findByPage,
    upDateStu,
    searchStu,
    delStu,
    addStu
}
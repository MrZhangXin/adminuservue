
export default {
    login(){
        return new Promise((resolve,reject)=>{
            resolve({
                resultCode: '000000',
                resultMsg: 'ok',
                token: 'zhangxin'
            })
        })
    },
    userInfo(){
        return new Promise((resolve,reject)=>{
            resolve({
                resultCode: '000000',
                name: 'zhangxin',
                resultMsg: 'ok',
                avatar:'',
                introduction: "i am admin",
                token: 'zhangxin',
                roles: ['zhangxin']
            })
        })
    }
}
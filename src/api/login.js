import request from '@/utils/request' //引入封装号的axios请求

//登录接口
export function login(username , password){
    //使用封装好的 axios 进行网络请求
    return request({
        url: '/admin/login',
        method: 'POST',
        //提交的数据
        data: {
            username,
            password
        }
    })
}

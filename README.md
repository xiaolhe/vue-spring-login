## vue-spring-login项目主要文档说明

[![trophy](https://github-profile-trophy.vercel.app/?username=xiaolhe&theme=flat)](https://github.com/ryo-ma/github-profile-trophy)
---

> 👊[后端代码地址 ](https://github.com/xiaolhe/vue-login-java.git)<br>

> 👊[前端代码地址 ](https://github.com/xiaolhe/vue-spring-login.git)<br>

> 👊[效果演示地址 ](https://blog.csdn.net/qq_41086359/article/details/109514918)


### 😀 配置axios请求后端 


```js
import axios from 'axios' //引入 axios

    // 创建 axios 实例
    const service = axios.create({
      baseURL: 'http://127.0.0.1:8088', //后端地址
      timeout: 15000, // 请求超时时间
    })

export default service

```


### 😀😀 配置代理

1. 在项目根目录下创建一个 vue.config.js 文件，内容如下：<br>
```js
module.exports = {
        devServer: {
            port: 8067,
            https: false,
            hotOnly: false,
            disableHostCheck: true,
            proxy: {
                '/admin': { //扫描访问路径
                    target: 'http://192.168.1.15:8088',//后端的请求地址
                    changeOrigin: true,
                }
            }
        }
    }


```

2. 在main.js中配置一项代码：如下
```js

Vue.config.productionTip = false

```


### 😀😄😄 在src目录下创建几个目录：
- api (网络请求接口包)
- router (路由配置包)
- store (Vuex 状态管理包)
- utils (工具包)
- views (vue 视图包，存放所有 vue 代码，可根据功能模块进行相应分包)

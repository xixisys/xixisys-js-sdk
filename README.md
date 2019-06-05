# XiXisys JS-SDK

XiXisys API JS-SDK

## 安装

```
$ yarn add xixisys-js-sdk
```

下载

* [sdk.js](https://xixisys-api.s3.cn-north-1.amazonaws.com.cn/js/sdk.js)

## 使用

```
import XiXisys from 'xixisys-sdk-js'

// 生成 CAS 号为 50-00-0 的合规数据到页面 #compliance-html 中
const sdk = XiXisys('api key')
sdk.ComplianceHtml({
    id: 'compliance-html', // 页面显示「合规数据」的容器id
    cas: '50-00-0', // 需要呈现的 CAS 号
})

// 或者
XiXisys.ComplianceHtml(
    'api key',
    {
       id: 'compliance-html', // 页面显示「合规数据」的容器id
       cas: '50-00-0', // 需要呈现的 CAS 号
    }
)
```

如果下载 sdk.js，可以使用

```
<script src="./sdk.js"></script>
<script>
    // 需要
    sdk = XiXisys.default

    sdk('api key').ComplianceHtml({ ... })
    // 或者
    sdk.ComplianceHtml('api key', { ... })
</script>
```


## API

### XiXisys(key)

返回一个 XiXisys sdk 对象

### XiXisys.ComplianceHtml(key, options)

生成一份合规数据

#### options
Type: `object`

##### id

类型：`string | Element`

显示「合规数据」的容器id

##### cas

类型: `string`

需要查询的 CAS 号


##### cssHref

类型: `string`

覆盖「合规数据」的样式链接

##### error

类型: `Function`

默认: `console.error`

错误返回方法

### XiXisys.CasNotFoundError

当 CAS 号找不到的时候返回

### XiXisys.ServerError

当服务错误的时候返回



# nodejs本地生成微信jssdk签名
用于本地环境调试jssdk

### 初始化
[微信测试号](https://mp.weixin.qq.com/debug/cgi-bin/sandboxinfo?action=showinfo&t=sandbox/index)
拿配置信息填写到config配置里

### 开启服务
> yarn

> yarn start

### 响应微信发送的Token验证地址

> localhost:3099/checkout

### 获取jssdk 签名信息

> localhost:3099/getSignature

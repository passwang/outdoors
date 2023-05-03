import Taro from '@tarojs/taro';

const base = '';
export const request = (url: string, data: any, method?: string) => {
   return new Promise((resolve) => {
    Taro.request({
        url: base + url,
        data: data,
        method: "GET" || method,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          resolve(res.data);
        },
        fail: (err) => {
            console.log('err', err);
            Taro.showToast({ title: '网络加载异常', icon: 'error'});
        }
   })
})
}
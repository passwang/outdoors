import React from 'react';
import { View, Form, Input, Text, Image, Button } from '@tarojs/components';
import 'taro-ui/dist/style/components/icon.scss';
import Taro from '@tarojs/taro';
import styles from './index.module.scss';

const Title_Map = {
  nickname: '昵称',
  name: '真实姓名',
  phone: '手机号',
  IDCard: '身份证号',
};
const showModel = (title) => {
  Taro.showModal({
    title,
    showCancel: false,
  });
};
const checkCard = (value) => {
  const format =
    /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(
      value
    );
  let lastNo = true;
  // 加权因子
  const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  // 校验位
  const parity = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  let sum = 0;
  if (value.length === 18) {
    for (let i = 0; i < 17; i++) {
      sum += Number(value[i]) * Number(factor[i]);
    }
    if (parity[sum % 11] !== value[17].toUpperCase()) {
      lastNo = false;
    }
  } else {
    lastNo = false;
  }
  return format && lastNo;
};
const check = (form) => {
  for (const key in form) {
    if (!(form[key].trim())) {
      showModel(`请输入${Title_Map[key]}`);
      return false;
    }
    // 校验手机号
    if (key === 'phone' && form[key]) {
      if (!/^1[3456789]\d{9}$/.test(form[key].trim())) {
        showModel('请输入正确的手机号');
        return false;
      }
    }
    // 校验身份证号
    if (key === 'IDCard' && form[key]) {
      if (!checkCard(form[key].trim())) {
        showModel('请输入正确的身份证号');
        return false;
      }
    }
  }
};
const Confirm: React.FC = () => {
  const formSubmit = (e) => {
    console.log('submit', e);
    const formVal = e?.detail?.value;
    if (check(formVal)) {
      // 请求接口
      //支付
      Taro.requestPayment({
        timeStamp: '',
        nonceStr: '',
        package: '',
        signType: 'MD5',
        paySign: '',
        success: function (res) {
          //跳转微信群页面
         },
        fail: function (res) { }
      })
    }
  };
  const getPhoneNumber = (e) => {
   console.log('phone', e?.detail?.code);
  }
  return (
    <View className='index'>
      <View className={styles.content}>
        <Form onSubmit={formSubmit}>
          <View className={styles.body}>
            <View className={styles.label}>项目: 徒步活动</View>
            <Text className={styles.price}>￥98</Text>
          </View>
          <View className={styles.body}>
            <View className={styles.label}>昵称</View>
            <View className={styles.extra}>户外称号，签到以及户外称呼使用</View>
            <Input className={styles.input} type='text' name='nickname' />
          </View>
          <View className={styles.body}>
            <View className={styles.label}>真实姓名</View>
            <View className={styles.extra}>用于购买保险</View>
            <Input className={styles.input} type='text' name='name' />
          </View>
          <View className={styles.body}>
            <View className={styles.label}>手机号</View>
            <View className={`${styles.input} ${styles.phoneInput}`}>
            <Input  type='text' name='phone' />
            {/* <Button  className={styles.phoneBtn} openType='getUserInfo' onGetUserInfo={getPhoneNumber}>
                一键获取
              </Button> */}
            </View>
          </View>
          <View className={styles.body}>
            <View className={styles.label}>身份证号</View>
            <Input className={styles.input} type='idcard' name='IDCard' />
          </View>
          <View className={styles.tabBar}>
            <Button className={`${styles.btn}`} formType='submit'>
              <Text
                className={`at-icon at-icon-check-circle ${styles.icon}`}
              />
              提交并支付98元
            </Button>
          </View>
        </Form>
      </View>
    </View>
  );
};
export default Confirm;

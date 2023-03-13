import { Component, PropsWithChildren } from 'react'
import { View, Text, Button } from '@tarojs/components';

import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/components/button.scss";
import styles from './index.module.scss';


export default class Detail extends Component<PropsWithChildren> {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className={styles.detail}>
        <View className={styles.header}>
          <View className={styles.title}>3月11日金龙湖</View>
          <View className={styles.price}>
            ￥98
            <Text className={styles.end}>已截止</Text>
          </View>
          <View className={styles.time}>
            <Text className={`at-icon at-icon-calendar ${styles.icon}`}></Text>
            <Text>报名时间: 03/8 10:00 - 03/10 22:00</Text></View>
          <View className={styles.people}>
            <Text className={`at-icon at-icon-bell ${styles.icon}`}></Text>
            报名人数: 48/48</View>
        </View>
        <View className={styles.notice}>
          <View className={styles.block}>
            <View className={styles.title}>【报名费用】: 120/人</View>
          </View>
          <View className={styles.block}>
            <View className={styles.title}>【费用包含】:</View>
            <View className={styles.text}> 往返大巴费用;</View>
            <View className={styles.text}> 活动组织费;</View>
            <View className={styles.text}> 领队费。</View>
          </View>
          <View className={styles.block}>
            <View className={styles.title}>【费用不含】:</View>
            <View className={styles.text}>秋冬防火期进山可能遇到村民拦路等产生进山费，或修改成景区路线产生门票费等，集体AA；
            </View>
            <View className={styles.text}>因个人原因下撤产生的打车费等其他费用；
            </View>
            <View className={styles.text}>费用包含以外的其他费用，均按照实际情况AA。</View>
          </View>
          <View className={styles.block}>
            <View className={styles.title}>【退款说明】:</View>
            <View className={styles.text}>3月9日18:00前，可全额退款，过时不接受任何形式退款申请；</View>
            <View className={styles.text}>因不可抗力因素取消活动的，48小时内自动全额退款；</View>
          </View>
          <View className={styles.block}>
            <View className={styles.title}>【报名须知】:</View>
            <View className={styles.text}>我们不是旅行社，不提供相应服务！！！</View>
            <View className={styles.text}>每位队员有义务对自身负责，矫情者勿报！！！</View>
            <View className={styles.text}>
              <View className={styles.notoicText}>
                1. 户外活动均有风险，报名前请仔细阅读活动介绍、路线特点、装备参考、行程安排、活动费用、报名须知、报名方式等，了解本次活动存在的风险。
              </View>
              <View className={styles.notoicText}>
                2. 参加活动按要求的时间地点集合，未按时到达指定集合地点的视为自愿放弃本次活动。
              </View>
              <View className={styles.notoicText}>
                3. 确保自己身体健康，状态良好，没有罹患不适合剧烈户外运动的疾病，对于隐瞒自身身体及其他真实情况者，责任一律自负。
              </View>
              <View className={styles.notoicText}>
                4. 活动中自觉服从领队指挥，禁止脱离队伍单独活动，不从事其他可能给队伍或他人带来危险的举动。
              </View>
              <View className={styles.notoicText}>
                5. 出发前请确认已购买保险，将活动信息和领队联系方式留给紧急联系人。对于商业活动，组织方会统一购买保险，请确保填写的信息为真实信息。
              </View>
              <View className={styles.notoicText}>
                6. 领队有根据现场突发情况，包括但不限于拦路封山等改变路线甚至取消活动的权力。
              </View>
              <View className={styles.notoicText}>
                7. 发生身体不适和其他危险，第一时间通知领队和其他队友，以获得指导和帮助，并配合采取必要的避险、治疗措施。
              </View>
              <View className={styles.notoicText}>
                8. 所有户外活动均具有一定的危险性，队员知悉并自愿参加活动，如在活动过程中发生意外伤害事故的，组织方不承担法律、经济和道德上的任何责任，一切后果由本人承担。
              </View>
              <View className={styles.notoicText}>
                9. 活动中产生的视频、照片、文字、游记等，组织方有使用权。
              </View>
              <View className={styles.notoicText}>
                10.  请您认真阅读上述条款，慎重选择是否参与该活动，如果报名即表示您已经仔细阅读并完全同意活动费用和报名须知中的所有条款声明。
              </View>
            </View>
          </View>
          <View className={styles.block}>
            <View className={styles.text}>
              报名成功会显示活动群二维码，可扫码进群。如错过二维码可添加管理员微信拉进活动群。
              管理员：花漓（18729055434，微信：wxf2369470）
            </View>
            <View className={styles.text}>
              截图保存图片可添加好友，添加好友时请注明添加缘由。
            </View>
            <View className={styles.wx}></View>
          </View>
        </View>
        <View className={styles.tabBar}>
          <Button className={`${styles.btn}`} openType='share'>分享</Button>
          <Button className={`${styles.btn}`}>报名</Button>
        </View>
      </View>
    )
  }
}

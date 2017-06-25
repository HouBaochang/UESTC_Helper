/**
 * @file 获取一卡通的数据
 */
import {} from './parser';
import {sendRequest} from '../../services/services';

async function getTransactionFlow(params) {
  /**
   * @name 获取交易流水数据
   * @param {Object} params表示该接口的参数，下面是params的接口内容
   *   const param = {
          _transDtl_WAR_ecardportlet_cur: 2, // 原接口用于分页的参数，当前页数
          _transDtl_WAR_ecardportlet_delta: 10, // 每页包含项目数
          _transDtl_WAR_ecardportlet_qdate: 7, // 查询的日期范围，可以是7/30/180天
          _transDtl_WAR_ecardportlet_qtype: 2 // 查询交易的类型 1-充值/2-消费/3-电费充值
        };
   * @return {Object} 解析到的数据
   */
  const baseUrl = 'http://ecard.uestc.edu.cn/web/guest/personal';
  const queryString = {
    p_p_id: 'transDtl_WAR_ecardportlet',
    p_p_lifecycle:0,
    p_p_state: 'exclusive',
    p_p_mode: 'view',
    p_p_col_id: 'column-4',
    p_p_col_count: 1,
    _transDtl_WAR_ecardportlet_action: 'dtlmoreview'
  };
  const param = {
    _transDtl_WAR_ecardportlet_cur: 2,
    _transDtl_WAR_ecardportlet_delta: 10,
    _transDtl_WAR_ecardportlet_qdate: 7,
    _transDtl_WAR_ecardportlet_qtype: 2
  };
  const paramters = Object.keys(queryString).map(v => {
    return [v, queryString[v]].join('=');
  }).concat(Object.keys(param).map(v => {
    return [v, param[v]].join('=');
  })).join('&');
  const url = `${baseUrl}?${paramters}`;
  const resText = await sendRequest(url);
  console.log(resText);
  return resText;
}

export default {
  getTransactionFlow
};
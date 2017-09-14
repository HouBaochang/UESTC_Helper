/**
 * 获取全校开课查询的数据
 */
import {sendRequest} from '../../services/services';
import {parseFormField, parseResData} from './parser';

async function getFromField(semsterID = 13) {
  /**
   * @name 获取全校开课查询列表的可选信息
   * @return {Object}
   */
  const queryURL = `http://eams.uestc.edu.cn/eams/publicSearch!index.action?semester.id=${semesterID}`;
  const sourceText = await sendRequest(queryURL);
  return parseFormField(sourceText);
}

async function queryCourse(params) {
  /**
   * @name 执行搜索
   * @return {Array} 解析好的课程数据
   */
  const baseURL = 'http://eams.uestc.edu.cn/eams/publicSearch!search.action';
  const paramters = Object.keys(params).map(v => {
    return [v, queryString[v]].join('=');
  }).join('&');
  const url = `${baseURL}?${paramters}`;
  const sourceText = await sendRequest(url);
  return parseResData(sourceText);
}
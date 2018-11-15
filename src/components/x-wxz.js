import { Tabs, Select } from 'antd';
import 'antd/dist/antd.css';
import React from "react";
import $ from "jquery";
import { Redirect } from 'react-router';
require("../css/x-wxz.css");
const TabPane = Tabs.TabPane;
const Option = Select.Option;



export default class About extends React.Component{
    constructor(props){
        super(props);
          this.state = {
            tabPosition: 'left',
          }
      }
      changeTabPosition = (tabPosition) => {
        this.setState({ tabPosition });
      }

    render(){
        return(
            <div className="x-rou">
              <div className="x-asid">


              <div>

        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="评论" key="1">
                <div>收到的评论</div>

                <ul className="x-list">

                  <li>
                      <a className="x-active"> <img src={require('../img/x-touxiang.jpg')} /></a>

                        <div className="x-info">
                          <div>
                            <a className="x-user">孵化雨声</a><span className="x-slogan">在文章</span>
                            <a className="x-wenzhang">《再同类软件中，这是我见过最强的了！》</a>
                            <span className="x-pinglun">中写了一条新评论</span>
                          </div>
                          <div className="x-time">2018.11.14 14:58</div>
                        </div>
                        <p className="x-meta">玩不玩英雄联盟，还是穿越火线</p>
                        <div className="x-bottom">

                        </div>

                  </li>

                </ul>
          </TabPane>
          <TabPane tab="简信" key="2">
            <div className="x-jianxin">
                全部简信
            </div>
          </TabPane>
          <TabPane tab="投稿请求" key="3">
            <div className="x-jianxin">
                全部投稿请求
            </div>
          </TabPane>
          <TabPane tab="喜欢和赞" key="4">
            <div className="x-jianxin">
                收到的喜欢和赞
            </div>
          </TabPane>
          <TabPane tab="关注" key="5">
            <div className="x-jianxin">
                全部关注
            </div>
          </TabPane>
          <TabPane tab="赞赏和付费" key="6">
            <div className="x-jianxin">
                赞赏和付费
            </div>
          </TabPane>
          <TabPane tab="其他提醒" key="7">
              <div className="x-jianxin">
                  其他提醒
              </div>
          </TabPane>
        </Tabs>
      </div>






              </div>
            </div>
        )

    }

}

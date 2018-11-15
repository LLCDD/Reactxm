import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Action from './redux/Action';
import Store from './redux/Store';
import Index from "./components/x-index";
import Wxz from "./components/x-wxz"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      arr:Store.getState()
    }
  }

  render() {
    return (
      <div className="App">
          
        <Index/>
      </div>
    );
  }
}

export default App;


// 就是需要安
// dxp 赵紫阳  李鹏
//
//侯德健  第一位在中央电视台露面的歌星
// 中国所谓解放 78年
//改革： 计划经济跟市场经济的区别    深圳 珠海 汕头 厦门  港口城市14个  沿海经济开发区 珠三角 长三角
// 64流血事件   孙中山让你明白人的尊严是什么
// 1070W吨钢    至少饿死了2000W人   八年抗战死了1800W      60年中国人口负生长
//柴玲
//    故意延后 咱们判断下一步美国干啥    1950年志愿军 25万人  彭德怀带领

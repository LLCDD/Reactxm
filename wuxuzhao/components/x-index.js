import React from "react";
import $ from "jquery";
import Mock from "mockjs";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Redirect } from 'react-router';
import { Alert } from 'antd';
require("../css/x-index.css");
// import ximg1 from '../img/x-touxiang';
require("../icon/iconfont.css")

Mock.mock("http://www.jingdong.com/aaa",{
  "user|3-7":[
    {
      "floor|+1":1,
      "name":"@cname",
      "address":"@cparagraph(true)",
      "time":"@datetime",
      "img":"@image(“40x40”)"
    }
  ]
})


export default class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          arr:[],  //所有的评论
          floor:"1",
          show: false
        }
    }
    focus(){  //获得焦点
      this.refs.area.style.display="block"
    }
    blur(){  //失去焦点

    }
    cancel(){//点击取消发送评论
      this.refs.area.style.display="none"
    }
    send(){//评论

      // console.log(Store.getState().username);
      if(this.refs.txt.value==""){  //回复内容不能为空
        this.setState({show:true})
        var t1=window.setInterval(refreshCount, 2700);
        var _this = this
        function refreshCount() {
          _this.setState({show:false})
           window.clearInterval(t1);
        }

      }else{

      this.state.floor = this.state.floor+1
      // console.log(this.state.floor);
      var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var seperator3 = " ";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hours = date.getHours();
        var min = date.getMinutes();
        var miao = date.getSeconds()
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        if (min >= 0 && min <= 9) {
            min = "0" + min;
        }
        if (miao >= 0 && miao <= 9) {
            miao = "0" + miao;
        }


        var currentdate = year + seperator1 + month + seperator1 + strDate + seperator3 + hours + seperator2 + min + seperator2 + miao;
        // console.log(currentdate);



      var arr = this.state.arr;
     arr.push({"name":"吴旭招","address":this.refs.txt.value,'floor':this.state.floor,"time":currentdate});
     this.setState({arr:arr})

      this.refs.txt.value = "" ;

      }

    }
    render(){
      const { show } = this.state;
        return(

            <div className="x-worp">

              <div style={{ display: show ? 'block' : 'none' }} className="x-alert">
                  <Alert message="回复内容不能为空" type="error" />
              </div>

                <div className="x-list">
                    <div className="x-comment">

                        <a className="x-img">
                            <img src={require('../img/x-touxiang.jpg')} />
                        </a>
                        <textarea placeholder="写下你的评论..." onFocus={this.focus.bind(this)} onBlur={this.blur.bind(this)} ref="txt">

                        </textarea>


                          <div className="x-none"  ref="area">
                              <a className="x-emoji">
                                  <i className="iconfont icon-emoji"></i>
                              </a>

                              <div className="x-hint">Ctrl+Enter 发表</div>

                              <a className="x-send" onClick={this.send.bind(this)}>发送</a>
                              <a className="x-cancel" onClick={this.cancel.bind(this)}>取消</a>
                          </div>

                    </div>


                    <div className="x-normal">
                        <div className="x-notop">
                            <span className="x-shuju">{this.state.arr.length}条评论</span>
                            <a className="x-zhikan">只看作者</a>
                            <div className="x-right">
                                <a className="x-timed x-active">按时间倒序</a>
                                <a className="x-timez">按时间正序</a>
                            </div>
                        </div>


                             {
                               this.state.arr.map((item,i)=>{
                                 return(
                                   <div className="x-listcom">
                                         <div className="x-author">
                                             <a className="x-1a"><img src={item.img} /></a>
                                             <div className="x-info">
                                                 <a className="x-ainfo">{item.name}</a>
                                                 <div><span>{item.floor}楼 · {item.time}</span></div>
                                             </div>
                                         </div>

                                          <div className="x-comment-wrap">
                                             <p className="x-wrapp">{item.address}</p>
                                             <div className="x-tool-group">
                                                 <a className="x-like-button">
                                                     <i className="iconfont icon-zan"></i>
                                                     <span>赞</span>
                                                 </a>

                                                  <a className="x-like-button x-huifu">
                                                     <i className="iconfont icon-iconfontpinglun"></i>
                                                     <span>回复</span>
                                                 </a>
                                             </div>
                                         </div>
                                   </div>
                                 )
                               })
                            }



                    </div>

                </div>



            </div>
        )

    }
    componentWillMount(){//即将进入dom

    }
    componentDidMount(){//已经进入dom  发起ajax请求

      var _this = this
      $.ajax({
        type:"get",
        url:"http://www.jingdong.com/aaa",
        dataType:"json",
        success:function(data){
          var num = data.user.length
          _this.setState({arr:data.user})
          _this.setState({floor:num})
            console.log(data.user.length);
          // _this.setState({floor:})
        }
      })
    }
    componentUpdate(){
      console.log("update");
    }

}

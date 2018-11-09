
var Action = {
    // 列子：
    // additem(text){
    //     return{
    //         type:"ADD_DOTO",
    //         text:text
    //     }
    // }
}
// 在试图页面   用 Action.additem("谣传的参数")
// 在用 Store.dispatch(Action.additem("---"))  把传的参数接走到 Reducer的里面进行逻辑的处理
// 所以在viwe的组件中要  引入
// import Store from ''
// import Reducer from ""
// import Action from ''
// 注册一个  setState  <= 来 修改他的值
//  在componentDidMount 的钩子函数中  Store.subscribe(this.   --)  来对他的该变进行监听
export default Action
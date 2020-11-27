import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /*state中存储数组*/
  state: {
    count:0
  },
  /*mutations中存放操作全局数据的相关方法*/
  // 1. 注意：不要在mutations中执行异步操作，如果非要异步，必须通过Action配合
  mutations: {
    /*mutations中的方法第一个参数固定为state，后边参数是调用者传递过来的(好像只能接受一个参数，难不成后边要用json?)*/
    add(state){
      state.count++;
    },
    addN(state,step){
      state.count+=step;
      console.log(step);
    },
    reduce(state){
      state.count--;
    },
    reduceN(state,step){
      state.count-=step;
    }
  },
  // Actions用来处理异步的操作
  // 1. 注意：actions中不能直接修改state中的值，必须调用mutations中的方法间接修改
  actions: {
    asynAdd(context){
      //使用延时来测试
      setTimeout(()=>{
        context.commit('add')
      },2000)
    },
    //带参数的
    asynAddN(context,step){
      //使用延时来测试
      setTimeout(()=>{
        context.commit('addN',step)
      },2000)
    },
    asynReduceN(context,step){
      setTimeout(()=>{
        context.commit('reduceN',step)
      },2000)
    }
  },
  //getters类似计算属性，可以随着state的值的变化而变化
  getters:{
    showNumJiOu(state){
      if(state.count%2===0){
        return '该数字是偶数';
      }else{
        return '该数字是奇数'
      }
    }
  }
})

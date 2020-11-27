<template>
  <div>
    <h3>当前的值为 {{count}}</h3>
    <h3>{{showNumJiOu}}</h3>
    <button @click="reduce">-1</button>
    <button @click="reduceN(2)">-2</button>
    <button @click="asynReduceN(2)">异步减2</button>
  </div>
</template>
<script>
  /*第二种全局导入的方式，先将mapState导入进来，然后将自己所需的state中的属性作为计算属性*/
  import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
  /*第二种修改全局变量的方法，导入mapMutations*/
  /*第二种方式调用actions*/
  /*第二种方式调用getters方式*/

  export default {
    data(){
      return {
      };
    },
    methods:{
      /*将全局方法注册到mapMutations*/
      ...mapMutations(['reduce','reduceN']),
      /*将全局actions注册到mapMutations*/
      ...mapActions(['asynReduceN'])
    },
    computed:{
      /*将全局变量注册到mapMutations*/
      ...mapState(['count']),
      /*将全局getters注册到mapMutations*/
      ...mapGetters(['showNumJiOu'])

    }
  }
</script>

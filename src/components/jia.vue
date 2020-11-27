<template>
  <div>
    <!--第一种导入全局属性的方式，直接取-->
    <h3>当前值为 {{$store.state.count}}</h3>
    <!--第一种使用getters-->
    <h3>{{$store.getters.showNumJiOu}}</h3>
    <button @click="addNum">+1</button>
    <button @click="addNumN">+2</button>
    <button @click="addNumAsny">异步加1</button>
    <button @click="addNumAsnyN">异步加2</button>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      };
    },
    methods:{
      /*第一种修改全局变量的方法*/
      addNum:function () {
        /*this.$store.state.count++;*/    //不能直接操作全局的变量，修改要使用mutations
        this.$store.commit('add');
      },
      addNumN:function () {
        this.$store.commit('addN',2);
      },
      addNumAsny:function () {
        this.$store.dispatch('asynAdd');
      },
      addNumAsnyN:function () {
        this.$store.dispatch('asynAddN',2);
      }
    }
  }
</script>

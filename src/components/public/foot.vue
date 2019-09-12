<template>

        <a href="https://www.pgyer.com/Jq1r"  class="foot">
            <span class="download">下载APP</span>
            </a>

</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  data() {
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  //方法集合
  methods: {

  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
}
</script>
<style scoped>
.foot{
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #ff7500;
  z-index: 99;
  justify-content: center;
  align-items: center;
}
.foot .download{
  /* border: 1px solid #FFF; */
  padding: 7px 30px;
  color: #FFF;
  border-radius: 20px;
}
</style>
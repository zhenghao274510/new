<template>
  <div class="sharema">
    <div class="cont">
      <p>
        邀请码：
        <span>{{spanma}}</span>
      </p>
      <p>注册时输入邀请码可获赠蘑菇劵1张</p>
    </div>
    <span class="copy" @click="copyma" id="ma">复制</span>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import { Toast } from "vant";
export default {
  data() {
    return {
      spanma: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    if(localStorage.getItem('usema')){

     let ma=localStorage.getItem('usema');
     this.spanma=usema.yama;
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {
    copyma() {
      console.log(1);
      const btn = document.querySelector("#ma");
      btn.addEventListener("click", () => {
        const input = document.createElement("input");
        document.body.appendChild(input);
        input.setAttribute("value", this.spanma);
        // input.select();
        input.setSelectionRange(0, 9999);
        if (document.execCommand("copy")) {
          document.execCommand("copy");
          Toast("复制成功!");
        }
        document.body.removeChild(input);
      });
   
    }
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
  activated() {}
};
</script>
<style scoped>
.sharema {
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 45px;
  border-radius: 20px;
  padding: 0 15px;
  background: #ff8643;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgba(255, 255, 255, 0.822);
  z-index: 99;
}
.cont {
  flex: 1;
}
.cont p:first-child {
  font-size: 14px;
  text-align: right;
}
.cont p:last-child {
  font-size: 12px;
  text-align: right;
}
.copy {
  padding: 3px 15px;
  font-size: 14px;
  text-align: center;
  border-radius: 15px;
  border: 1px solid #fff;
  margin-left: 10px;
  z-index: 999;
}
</style>
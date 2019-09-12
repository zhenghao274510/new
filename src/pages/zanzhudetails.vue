<template>
  <div class="page_zan">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="i in dataobject.images " :key="i" class="ban_container">
        <img :src="i" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="container">
      <div
        class="shop_num"
        style="display:flex; justify-content: space-between;;width:100%;color:#5D5D5D;font-size:14px;"
      >
        <div class>{{dataobject.name}}</div>
        <div style="background:#FFF;">{{dataobject.store}}</div>
      </div>
      <div class="shop_num">
        <!-- <div style="color:#333333;">{{dataobject.name}}</div> -->
        <div>商品规格:{{dataobject.skus}}</div>
      </div>
      <div class="lipin">
        <h3 class="title" style="text-align:left;font-weight:bold;">礼品描述</h3>

        <p class="shopin">{{dataobject.description}}</p>
      </div>
    </div>
    <div class="bao">
      <div class="pointtit">
        <h3 class="point">
          <i></i> 本期赞助
          <i></i>
        </h3>
        <h4>{{dataobject.sponsorName}}</h4>
      </div>

      <div class="show_img">
        <van-swipe indicator-color="white">
          <van-swipe-item v-for="i in dataobject.sponsorImages " :key="i">
            <img :src="i" alt style="height:200px;" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <iframe :src="dataobject.url" class="zzdetalis" id="iframepage" frameborder="0" scrolling="no"></iframe>
    <div class="sharema">
      <div class="cont" @click="copyma" id="ma">
        <p>注册时输入邀请码可获赠蘑菇劵1张</p>
        <p>
          邀请码：
          <span>{{spanma}}</span>
          <span class="copy">复制</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';
import { Toast } from "vant";
export default {
  data() {
    return {
      value: 5,
      dataobject: {},
      goodsList: [],
      id: "",
      uid: "",
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
    this.id = this.$route.query.zanzhudetailsid;
    this.uid = this.$route.query.zanzhudetailsuid;
    // this.id = "00b21174063444d6aa8a5f38aec04e79";
    var params = { cmd: "getMushById", id: this.id, uid: this.uid };
    this.postRequest(params).then(res => {
      console.log(res);
      this.dataobject = res.data;
      this.goodsList = res.data.goodsList;
      this.spanma = res.data.invitation;
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    window.onresize = () => {
      var ifm = document.getElementById("iframepage");
      ifm.height = document.documentElement.clientHeight;
    };
  },
  //方法集合
  methods: {
    copyma() {
      console.log(1);
      const btn = document.querySelector("#ma");
      btn.addEventListener("click", () => {
        const input = document.createElement("input");
        document.body.appendChild(input);
        input.setAttribute("value", this.spanma);
        input.select();
        // input.setSelectionRange(0, 9999);
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
  height: 60px;
  border-radius: 30px;
  padding: 0 15px;
  background: #ff8643;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgba(255, 255, 255, 0.822);
  z-index: 99;
}
.ban_container img {
  width: 100%;
  height: 200px;
}
.cont {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.cont p:first-child {
  font-size: 16px;
  text-align: right;
}
.cont p:last-child {
  font-size: 12px;
  text-align: right;
  margin-top: 5px;
}
.copy {
  padding: 1px 15px;
  font-size: 12px;
  text-align: center;
  border-radius: 15px;
  /* border: 1px solid #fff; */
  color: #ff8643;
  background: #fff;
  margin-left: 10px;
  z-index: 999;
}
.zzdetalis {
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  height: 2100px;
}
.page_zan {
  width: 100%;
}
header {
  height: 50px;
  padding: 0 15px;
  display: flex;
  width: 100%;
  align-items: center;
}
header > p {
  text-align: center;
  width: 100%;
  line-height: 50px;
  color: #7d7d7d;
}
.container {
  padding: 0 15px;
}
.show_img {
  width: 100%;
}
.point i:first-child {
  width: 30px;
  height: 15px;
  background: url("/static/images/1.png") no-repeat;
  background-size: 100% 100%;
  display: inline-block;
}
.point i:last-child {
  width: 30px;
  height: 15px;
  background: url("/static/images/2.png") no-repeat;
  background-size: 100% 100%;
  display: inline-block;
}
.shop_num {
}
.shop_num div:first-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  /* height: 30px;
  line-height: 30px; */
  font-size: 15px;
  color: #000000;
}
.shop_num div:last-child {
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  padding-left: 30px;
  color: #1a1919;
  background: #f9f9f9;
  border-radius: 5px;
  margin-top: 10px;
}
.shopin {
  font-size: 12px;
  line-height: 25px;
  color: #6c6c6c;
}
.footdetials .shopin {
  padding: 0 15px;
}
.title {
  line-height: 30px;
  font-size: 15px;
  color: #4a4a4a;
}
.lipin {
  padding: 15px 0;
}
.point {
  text-align: center;
  font-size: 18px;
}
.pointtit {
  height: 60px;
  display: flex;
  width: 100%;
  background: #f9f9f9;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.pointtit h4 {
  color: #8a8888;
  line-height: 25px;
}
.mark {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  height: 50px;
  width: 50px;
  background: #fff;
  border-radius: 50%;
  color: #ff7500;
  text-align: center;
  padding: 5px;
  font-size: 14px;
}
.show_img {
  position: relative;
}
.zanshuinfo {
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
}
.left p {
  color: #fa996d;
  line-height: 25px;
}
.right {
  color: #fa996d;
  line-height: 25px;
}
.right span {
  padding: 3px 15px;
  background: #ff7500;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
}
.left p:last-child {
  display: flex;
  align-items: center;
}
.footdetials {
}
.title {
  text-align: center;
}
.star {
  font-size: 13px;
}
</style>
<template>
  <div class="page_zan">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="i in dataobject.images " :key="i">
        <img :src="i" alt style="height:200px;" />
      </van-swipe-item>
    </van-swipe>
    <div class="container">
      <div
        class="shop_num"
        style="display:flex; justify-content: space-between;;width:100%;color:#5D5D5D;"
      >
      <p>{{dataobject.name}} {{dataobject.store}}</p>
        <!-- <div class></div>
        <div style="background:#FFF;"></div> -->
      </div>
      <div class="shop_num">
        <!-- <div class>{{dataobject.name}}</div> -->
        <div>规格:   &nbsp;&nbsp;&nbsp;{{dataobject.skus}}</div>
      </div>
      <div class="lipin">
        <h3 class="title" style="text-align: left;">礼品描述</h3>
        <!-- <p class="shopin">{{dataobject.name}}</p> -->
        <p class="shopin">{{dataobject.description}}</p>
      </div>
    </div>
    <div class="bao">
      <div class="pointtit">
        <h2 class="point">
          <i></i> 爆款推荐
          <i></i>
        </h2>
      </div>

      <div class="show_img">
        <van-swipe indicator-color="white">
          <van-swipe-item v-for="i in dataobject.sponsorImages " :key="i">
            <img :src="i" alt />
          </van-swipe-item>
        </van-swipe>
        <!-- <img :src="dataobject.images[0]" alt  /> -->
      </div>

      <div class="zanshuinfo">
        <div class="left">
          <h4>{{dataobject.goodsName}}</h4>
          <p class="star">销量：{{dataobject.sales}}</p>
          <p>
            <span class="star" style="margin-right:5px;">评星</span>
            <van-rate readonly :value="value" color="#F75810" size="12" />
            <span style="margin-left:5px;">{{dataobject.score}}</span>
          </p>
        </div>
        <div class="right">
          <p>￥{{dataobject.price}}</p>
          <span>购买</span>
        </div>
      </div>
      <div class="footdetials">
        <h3 class="title">产品详情</h3>
        <!-- <van-swipe  indicator-color="white">
        <van-swipe-item v-for="i in dataobject.sponsorImages " :key="i"><img :src="i" alt=""></van-swipe-item>
        </van-swipe>-->
        <!-- <p class="shopin">{{dataobject.description}}</p> -->
      </div>
    </div>
    <!-- <link rel="import" :href="dataobject.goodsUrl" /> -->
    <iframe
      :src="dataobject.goodsUrl"
      class="zzdetalis"
      frameborder="0"
      scrolling="no"
      id="urlIframe"
    ></iframe>

    <div class="sharema">
      <div class="cont">
         <p>注册时输入邀请码可获赠蘑菇劵1张</p>
        <p>
          邀请码：
          <span>{{spanma}}</span>
            <span class="copy" @click="copyma" id="ma">复制</span>
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
      id: "",
      uid: "",
      dataobject: {},
      goodsList: [],
      spanma: "",
      value: 5,
      bHeight: ""
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
    //  this.id =this.$route.query.ggdetailsid;
    //  this.uid =this.$route.query.ggdetailsuid;
    this.id = "0ad73574b439442194cddb5c754ed5a5";
    this.uid = "00d533654a1d412b82a1181f6c908c6f";
    var params = { cmd: "getMushById", id: this.id, uid: this.uid };
    this.postRequest(params).then(res => {
      console.log(res);
      this.dataobject = res.data;
      this.goodsList = res.data.goodsList;
      this.spanma = res.data.invitation;
      this.value = parseInt(res.data.score);
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    var iframe = document.getElementById("urlIframe");
    this.bHeight = iframe.contentWindow.document.body.scrollHeight;
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
.zzdetalis {
  padding:0 15px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  margin-bottom: 0.5rem;
  height: 2100px;
}
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
  font-weight: 500;
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
  background: #FFF;
  margin-left: 10px;
  z-index: 999;
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
}
.container {
  padding: 0 15px;
}
.show_img {
  /* padding: 15px 0; */
}
.shop_num {
}
.shop_num p {
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  height: 30px;
  line-height: 30px;
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
  color: #999;
}
.footdetials{
  font-size: 0;
}
.footdetials .shopin {
  /* padding: 0 10px; */
}
.title {
  line-height: 30px;
  font-size: 15px;
  color: #333333;
}

.lipin {
  padding: 15px 0;
}
.point {
  text-align: center;
}
.pointtit {
  height: 60px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
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
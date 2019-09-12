<template>
  <div class="page_zan">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="i in dataobject.images " :key="i" class="banner_img">
        <img :src="i" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="container">
      <div class="bginfo">
        <div class="price">
          <span style="font-size:30px; line-height:50px;">￥{{dataobject.priceSpike}}</span>
          <span style="font-size:14px;">￥{{dataobject.price}}</span>
        </div>
        <span style="margin-left:5px;">贡献值+{{dataobject.contribution}}</span>
      </div>
    </div>
    <div class="main">
      <div class="shop_num">
        <!-- <div class>{{dataobject.score}}</div> -->
        <!-- <div>{{dataobject}}</div> -->
      </div>
      <div class="lipin">
        <!-- <h3 class="title">礼品描述</h3> -->
        <p class="shopin">
          {{dataobject.name}}
          <span class="xiannum">限量抢购</span>
        </p>

        <p class="buynum">销量：{{dataobject.sales}} 库存：{{dataobject.store}}</p>
        <p class="star">
          <van-rate readonly :value="value" color="#F75810" size="12" />
          <span style="color:#fa996d;margin:0 5px;">{{dataobject.score}}</span>
          <span style="margin-left:5px;">{{dataobject.number}}人评价</span>
        </p>
        <p class="details" style="color:#000;">{{dataobject.description}}</p>
        <h4 style="color:#666666;line-height:40px;">参数</h4>
        <div class="canshu">
          <p
            v-for="(item,index) in dataobject.paramList"
            :key="index"
          >{{item.name}}&nbsp;&nbsp;&nbsp;{{item.value}}</p>
        </div>
      </div>
    </div>
    <div class="line"></div>

    <div class="footdetials">
      <h3 class="title">产品详情</h3>

      <!-- <div class="show_img">
        <img :src="i" alt  v-for="i in item.images" :key="i"  />
      </div>

      <p class="shopin">{{item.description}}</p>-->
      <iframe :src="dataobject.url" class="zzdetalis" frameborder="0" scrolling="no"></iframe>
    </div>
    <!-- <div class="sharema">
      <div class="cont">
        <p>注册时输入邀请码可获赠蘑菇劵1张</p>
        <p>
          邀请码：
          <span>{{spanma}}</span>
          <span class="copy" @click="copyma" id="ma">复制</span>
        </p>
      </div>
    </div>-->
    <router-link to="/yaoqing" class="shop_car" href download="下载">
      <li class="total">
        <p style="color:#000">
          合计:
          <span class="totprice">￥{{dataobject.priceSpike}}</span>
        </p>
        <p class="gongxian">贡献+{{dataobject.contribution}}</p>
      </li>
      <li class="add_car">加入购物车</li>
      <li class="goto">去结算</li>
    </router-link>
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
    this.id = this.$route.query.shopdetailsid;
    this.uid = this.$route.query.shopdetailsuid;
    // this.id = "0889b032fc9f42e3853789245a04b72f";
    var params = { cmd: "getGoodsById", id: this.id, uid: this.uid };
    this.postRequest(params).then(res => {
      console.log(res);
      this.dataobject = res.data;
      this.goodsList = res.data.goodsList;
      this.spanma = res.data.invitation;
      this.value = parseInt(res.data.score);
    });
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
.van-swipe {
  height: 200px;
}
.banner_img img {
  width: 100%;
  height: 375px;
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
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.cont p:first-child {
  font-size: 14px;
  text-align: right;
}
.cont p:last-child {
  font-size: 12px;
  text-align: right;
  margin-top: 5px;
}
.copy {
  padding: 1px 15px;
  font-size: 14px;
  text-align: center;
  border-radius: 15px;
  border: 1px solid #fef099;
  margin-left: 10px;
  z-index: 999;
}
.totprice {
  color: #f75810;
}
.gongxian {
  color: #f75810;
}
.total {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.total p {
  font-size: 14px;
  line-height: 20px;
}
.shop_car {
  width: 100%;
  display: flex;
  height: 50px;
  position: fixed;
  bottom: 0;
  z-index: 99;
  background: #fff;
}
.shop_car li {
  flex: 1;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.goto {
  background: #f6300f;
  color: #fff;
}
.add_car {
  background: #ff7500;
  color: #fff;
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
.bginfo {
  height: 50px;
  padding: 0 15px;
  display: flex;
  width: 100%;
  background: #f75810;
  color: #fff;
  justify-content: space-between;
  align-items: center;
}
.main {
  padding: 0 15px;
}
.show_img {
  /* padding: 15px 0; */
}
.price {
  font-size: 14px;
  height: 50px;
}
.price span:last-child {
  text-decoration: line-through;
  font-size: 12px;
}
.shop_num {
}
.shop_num div:first-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  color: #1a1919;
  background: #f9f9f9;
  border-radius: 5px;
  margin-top: 10px;
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
}
.buynum {
  font-size: 12px;
  color: #9b9b9b;
}
.xiannum {
  padding: 2px 10px;
  font-size: 12px;
  background: #f6300f;
  color: #fff;
  margin-left: 5px;
  border-radius: 5px;
}

.footdetials {
  padding: 0 15px;
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
  background: #eee;
  align-items: center;
  justify-content: center;
}
.mark {
  position: absolute;
  bottom: 20px;
  right: 20px;
  height: 50px;
  width: 50px;
  background: red;
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
  display: flex;
  color: #ccc;
  align-items: center;
}
.details {
  display: flex;
  color: #ccc;
}
.canshu {
  font-size: 13px;
  background: #f9f9f9;
  padding-left: 10px;
}
.canshu p {
  color: #949494;
  line-height: 30px;
}
.line {
  height: 10px;
  background: #f9f9f9;
}
.zzdetalis {
  width: 100%;
  border: none;
  margin-top: 5px;
  height: 2100px;
}
</style>
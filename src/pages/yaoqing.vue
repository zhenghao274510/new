<template>
  <div class='yaoqingcon'>
    <div class="containter">
        <div class="con_logo">
            <img src="/static/images/dingbu@2x.png" alt="">
           
        </div>
      <ul class="cont_info">
           <li>
             <div class="phone"><img src="/static/images/1@2x.png" alt=""></div>
             <div class="main">
               <h3>免费抢礼品</h3>
               <p>各种水果、零食、服饰、日用百货等礼品，就像 林子里的蘑菇熟了，随时等您来采。</p>
             </div>
           </li>
            <li>
             <div class="phone"><img src="/static/images/2@2x.png" alt=""></div>
             <div class="main">
               <h3>花钱买好货</h3>
               <p>客户满意度是检验品质的唯一标准，新品超 低价秒杀，综合评分3.0以上进入商城低于 3.0时自动下架，只把精品留给挑剔的您！</p>
             </div>
           </li>
            <li>
             <div class="phone"><img src="/static/images/3@2x.png" alt=""></div>
             <div class="main">
               <h3>付出有收益</h3>
               <p>您在采蘑菇APP任何形式的有效付出(购 物、点评、邀请好友等)都将获取贡献值每 天领取蘑菇币收益(1蘑菇币购买力＝1元)</p>
             </div>
           </li>
      </ul>
    </div>
      <div class="sharema">
    <div class="cont" @click="copyma" id="ma">
      <p>注册时输入邀请码可获赠蘑菇劵1张</p>
      <p>
        邀请码：
        <span>{{spanma}}</span>
         <span class="copy"  >复制</span>
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
     erma:'',
     spanma:''
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
        this.id =this.$route.query.yaoqinguid;
        //  this.id='00b21174063444d6aa8a5f38aec04e79';
     var params={cmd:"getUserInfo",uid:this.id};
      this.postRequest(params).then(res => {       
          console.log(res)
          this.erma=res.data.qrImage;
          this.spanma=res.data.invitation;
        
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

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
  activated() {},
}
</script>
<style scoped>
.sharema {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 60px;
  border-radius: 30px;
  padding: 0 15px;
  /* background: #ff8643; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgba(255, 255, 255, 0.822);
  z-index: 99;
 border: 1px solid #fef099;
}
.cont {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.cont p:last-child {
   font-size: 14px;
  text-align: right;
  margin-top: 5px;
}
.cont p:first-child {
  
    font-size: 16px;
  text-align: right;
}
.copy {
  padding: 0 15px;
  font-size: 14px;
  text-align: center;
  border-radius: 15px;
  /* border: 1px solid #fff; */
  margin-left: 10px;
  z-index: 999;
   background: #ff8643;
}
.yaoqingcon{width: 100%;height: 100%; overflow: hidden;}
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
.con_logo{margin: 0 auto;align-items: center;justify-content: center;padding-top: 40px ;width: 150px;}
.containter{
  height: 100%;
 padding:0 30px;
 background:url('/static/images/yaoqing_bg@2x.png') no-repeat;
 background-size: 100% 100%;
}
.cont_info{padding:30px 10px;border: 1px solid #fef099;border-radius: 3px;margin-top: 30px; }
.cont_info li{display:flex;padding-top: 8px;}
.phone{width: 80px;margin-top: 10px;}
.main{flex:1;margin-left: 5px;}
.main h3{color:#fff717;text-indent: 50px; }
.main p{color:#FFF;font-size: 12px;line-height: 20px;flex-wrap: wrap; }
.shaoma{display: flex;flex-direction: column;align-items: center;margin-top: 20px;}
.shaoma p{color: #fff717; font-weight: bold;}
</style>
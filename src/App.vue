<template>
  <div id="app">
    <div id="app-header"></div>
    <div id="app-nav"></div>
    <div id="app-content">
        <swiper id="swiperBox" :options="swiperOption" ref="mySwiper">
            <swiper-slide class="swiper-slide">
                <Home :activeIndex="activeIndex"></Home>
            </swiper-slide>
            <!--<swiper-slide class="swiper-slide">-->
                <!--<About></About>-->
            <!--</swiper-slide>-->
            <swiper-slide class="swiper-slide">
                <Skill :activeIndex="activeIndex"></Skill>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <Exp></Exp>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <Project></Project>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <Contract></Contract>
            </swiper-slide>
        </swiper>
    </div>
      <!--<footer>-->
          <!--<div class="github">-->
              <!--<iframe src="https://ghbtns.com/github-btn.html?user=zhaoky&repo=flqin&type=star&count=true&size=small" frameborder="0" scrolling="0"></iframe>-->
              <!--<iframe src="https://ghbtns.com/github-btn.html?user=zhaoky&repo=flqin&type=fork&count=true&size=small" frameborder="0" scrolling="0"></iframe>-->
          <!--</div>-->
      <!--</footer>-->
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Home from '@/components/Home/Home'
import About from '@/components/About/About'
import Skill from '@/components/Skill/Skill'
import Exp from '@/components/Exp/Exp'
import Project from '@/components/Project/Project'
import Contract from '@/components/Contract/Contract'

export default {
  name: 'App',
  data () {
    return {
      activeIndex: 0,
      swiperOption: {
        notNextTick: true,
        direction: 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        height: window.innerHeight,
        resistanceRatio: 0,
        pagination: '#app-nav',
        createPagination: false,
        paginationClickable: true,
        observeParents: true,
        onSlideChangeEnd: (swiper) => {
          this.activeIndex = swiper.activeIndex
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // this.swiper.slideTo(3, 1000, false); //手动跳到指定页
  },
  components: {
    swiper,
    swiperSlide,
    Home,
    About,
    Skill,
    Exp,
    Project,
    Contract
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*初始化css*/
body,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div{margin:0;padding:0;border:0;}
body{background:#fff;color:#333;font-size:12px;font-family:"SimSun","宋体","Arial Narrow";}

ul,ol{list-style-type:none;}
select,input,img,select{vertical-align:middle;}

a{text-decoration:none;}
a:link{color:#009;}
a:visited{color:#800080;}
a:hover,a:active,a:focus{color:#c00;text-decoration:underline;}

.swiper-slide{
    font-size: 24px;
    text-align: center;
}
.swiper-slide:nth-child(2n){
    background: #f5f5d5;
}
.swiper-slide:nth-child(2n-1){
    background: seashell;
}
#app-nav {
    position: fixed;
    top: 50%;
    right: 20px;
    z-index: 20;
    text-align: center;
    margin-top: -100px;
}
#app-nav .swiper-pagination-bullet {
    display: block;
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background: #000000;
    opacity: 0.8;
    border: 1px solid #fff;
    cursor: pointer;
}
#app-nav .swiper-pagination-bullet:not(:last-child) {
    margin-bottom: 8px;
}
#app-nav .swiper-pagination-bullet-active {
    background: red;
}
</style>

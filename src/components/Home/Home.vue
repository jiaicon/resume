<template>
    <div class="home">
        <div class="dim"></div>
        <div class="content">
            <div class="avatar animated" :class="activeIndex == 0 ? 'shake' : ''">
                <img class="avatar-me" :src="me" alt="">
            </div>
            <ul class="mine">
                <li>Hello,I'm</li>
                <li class="mine-name">Icon</li>
                <li>A small icon in the front-end world</li>
            </ul>
            <!--<ul>-->
                <!--<li>大家好，我是</li>-->
                <!--<li>Icon</li>-->
                <!--<li>前端世界里的一个小icon</li>-->
            <!--</ul>-->
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'home',
      me: require('@/assets/images/me.png')
    }
  },
  props: ['activeIndex']
}
</script>

<style scoped>
    .home {
        width: 100%;
        height: 100%;
        background: url("../../assets/images/home.png") no-repeat center center;
        background-size: cover;
        position: relative;
    }
    .dim {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #FFFFFF;
        opacity: 0.5;
        z-index: 0;
        /*-ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);*/
        /*-moz-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=50);*/
        /*filter: blur(100vh);*/
    }
    .content {
        position: absolute;
        top: 40%;
        width: 100%;
        transform: translateY(-50%);
    }
    .avatar {
        margin-bottom: 5vh;
    }
    .avatar-me {
        width: 20vw;
        height: 20vw;
    }
    .mine {
        padding: 0 5vw;
    }
    .mine-name {
        position: relative;
    }
    .mine-name:after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 50vw;
        height: 3px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #000;
    }
</style>

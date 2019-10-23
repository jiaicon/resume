<template>
    <transition>
        <div class="animated" :class="activeIndex == 1 ? 'bounceInDown' : ''">
            skill
        </div>
    </transition>
</template>

<script>
export default {
  data () {
    return {
      name: 'skill'
    }
  },
  props: ['activeIndex']
}
</script>

<style>
.skill {
    width: 100%;
    height: 100%;
    /*background-image: url("../../assets/images/bj.jpeg");*/
    /*background-position: center center;*/
    /*background-repeat: no-repeat;*/
    /*!*background-attachment: fixed;*!*/
    /*background-size: cover;*/
}
</style>

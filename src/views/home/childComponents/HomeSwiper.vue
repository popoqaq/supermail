<template>
  <swiper>
    <swiper-item
      v-for="(item,index) in banner.list"
      :key="index"
    >
      <a :href="item.link">
        <img
          :src="item.image"
          alt=""
        >
      </a>
    </swiper-item>
  </swiper>
</template>

<script>

import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {

    }
  },
  props: {
    banner: {
      type: Object,
      default () {
        return {}
      }
    }
  }

}
</script>

<style>
</style>
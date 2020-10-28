<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommends="recommend">
    </recommend-view>

  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import { getHomeMultidata } from 'network/home/home'
import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from './childComponents/RecommendView'

export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data () {
    return {
      banner: {},
      recommend: {}
    }
  },
  created () {
    //1.请求多个数据
    getHomeMultidata().then(res => {
      console.log(res);
      this.banner = res.data.banner
      this.keywords = res.data.keywords
      this.recommend = res.data.recommend
    })
  },

}
</script>

<style>
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
</style>
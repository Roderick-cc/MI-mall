<template>
  <div class="footer-contain clearfix">
      <footer class="nav-footer-wrap">
        <div class="nav-footer-list">
            
            <router-link   to="/index" class="nav-footer-item"  >
                <i class="icon iconfont icon-home"></i>
                <span class="item-text">首页</span>
            </router-link>
            <router-link  to="/categorieslist"  class="nav-footer-item" >
                <i class="icon iconfont icon-fenlei"></i>
                <span class="item-text">分类</span>
            </router-link>
            <router-link   to="/cart" class="nav-footer-item" >
                <i class="icon iconfont icon-tianmaochaoshigouwuche"></i>
                <span class="item-text">购物车</span>
            </router-link>
            <router-link   to="/user" class="nav-footer-item" >
                <i class="icon iconfont icon-wo"></i>
                <span class="item-text">我的</span>
            </router-link>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // activeNav: ''
    }
  },
  mounted: function(){
    
  },
  computed: {
    activeNav: function(){
      return this.$route.path;
    }
  },
  methods: {
    open(path){
      this.activeNav = path;
      this.$router.push({
          path: path
      });
    }
  }
}
</script>

<style>
.nav-footer-wrap {
  width: 100%;
  height: 2.6rem;
  position: fixed;
  bottom: 0;
  background-color: #fff;
}
.nav-footer-wrap .nav-footer-list {
  height: 100%;
  display: flex;
  align-items: center;
}
.nav-footer-wrap .nav-footer-list .active {
  color: #ff6700;
}
.nav-footer-wrap .nav-footer-list .nav-footer-item {
  float: left;
  width: 25%;
  height: 2rem;
  color: #999;
}
.nav-footer-wrap .nav-footer-list .nav-footer-item .icon {
  display: block;
  text-align: center;
  font-size: 1rem;
}
.nav-footer-wrap .nav-footer-list .nav-footer-item .item-text {
  font-size: 0.7rem;
  display: block;
  text-align: center;
}
.active{
      color: #ff6700!important;
}
.footer-contain{
  width: 16.5rem;
  overflow: hidden;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
</style>

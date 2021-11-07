<template>
  <div id="app">
    <h3>我是标题</h3>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import { MainTabBar } from "components/content/maintabbar";
import MainTabbar from "./components/content/maintabbar/MainTabbar.vue";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style lang="less">
@import "assets/css/base.css";
body {
  touch-action: none;
}
</style>

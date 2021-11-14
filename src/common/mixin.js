// 公共代码
import goTop from "@/components/content/goTop";
export const backTopMixIn = {
  components: {
    goTop,
  },
  data() {
    return {
      // 是否显示返回顶部
      isShowTop: false,
    };
  },
  methods: {
    // 返回顶部
    backTop() {
      // 调用scroll里封装的方法
      this.$refs.scroll.scrollTo(0, 0);
    },
    showGoTop(y) {
      // 当滑动到一定位置出现返回顶部

      this.isShowTop = y < -1000 ? true : false;
    },
  },
};

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        asserts: "@/asserts",
        common: "@/common",
        components: "@/components",
        network: "@/network",
      },
    },
  },
};

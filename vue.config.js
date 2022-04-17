const path = require("path");

module.exports = {
  // 修改 pages 入口
  pages: {
    index: {
      entry: "examples/main.js", // 入口
      template: "public/index.html", // 模板
      filename: "index.html", // 輸出檔案
    },
  },
  chainWebpack: (config) => {
    // 將 @ 指向改成 example 資料夾
    config.resolve.alias
      .set("@", path.resolve("example"))
      .set("~", path.resolve("packages"));

    // 把新增的 example 及 packages 資料夾加入編譯目標
    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use("babel")
      .loader("babel-loader");
  },
};

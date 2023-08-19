module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api": {
        target: "https://netzwelt-devtest.azurewebsites.net",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};

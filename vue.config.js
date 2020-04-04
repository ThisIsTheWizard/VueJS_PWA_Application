module.exports = {
  pwa: {
    name: "My First PWA App",
    themeColor: "#ffffff",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "dev/sw.js"
    }
  }
};

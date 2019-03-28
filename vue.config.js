// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "http://tylerkrupicka.com/vue-json-component/"
      : "/"
};

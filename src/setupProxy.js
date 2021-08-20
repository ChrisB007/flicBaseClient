const createProxyMiddleware = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google", "auth/*"],
    createProxyMiddleware({
      target: "https://calm-beyond-30005.herokuapp.com/",
    })
  );
};

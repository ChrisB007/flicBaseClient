const createProxyMiddleware = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google", "auth/*"],
    createProxyMiddleware({
      target: "REACT_APP_HEROKU_SERVER_URL",
    })
  );
};

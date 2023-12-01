const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/v1", // proxy가 필요한 path parameter를 입력합니다.
    createProxyMiddleware({
      target: "http://localhost:8080", // 타겟이 되는 api url를 입력
      changeOrigin: true, // 대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분
    })
  );
  /*app.use(
    ["/api2","/api3"], //proxy가 필요한 path prameter를 입력합니다.(여러개일 경우 배열로 입력)
    createProxyMiddleware({
      target: "http://localhost:3080",
      changeOrigin: true,
    })
  );*/
};
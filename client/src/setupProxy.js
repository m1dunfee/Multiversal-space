// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  const apiProxyTarget = process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'Multiverstal.space';

  app.use(
    '/api',
    createProxyMiddleware({
      target: apiProxyTarget,
      changeOrigin: true,
    })
  );
};

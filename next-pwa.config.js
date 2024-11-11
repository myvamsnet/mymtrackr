// next-pwa.config.js
const runtimeCaching = require("next-pwa/cache");

module.exports = {
  dest: "public",
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  disable: process.env.NODE_ENV === "development", // Disable PWA in development
  register: true,
  skipWaiting: true,
  // Additional options can be added as needed
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  optimization: undefined,
  devtools: { enabled: true },
  pages: true,
  modules: [['@nuxtjs/eslint-module', { fix: true }]],
  vite: { css: { preprocessorOptions: { scss: { additionalData: '@import "@/assets/styles/_vars";' } } } },
  runtimeConfig: {
    public: {
      apiHost: process.env.API_HOST?.replace(/\/$/, ''),
    },
  },
});

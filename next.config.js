const withTwin = require('./withTwin.js')
/** @type {import('next').NextConfig} */
module.exports = withTwin({
  reactStrictMode: true,
  // Only active when coverage from cypress wants to be collected, 22/01 Problems with Next/Fonts
  // experimental: {
  //   swcPlugins: [
  //     ['swc-plugin-coverage-instrument', {}]
  //   ]
  // },
  images: {
    domains: ['i.pinimg.com', 'www.freeiconspng.com', 'raw.githubusercontent.com'],
    disableStaticImages: true
  },
})

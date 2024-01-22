const withTwin = require('./withTwin.js')
/** @type {import('next').NextConfig} */
module.exports = withTwin({
  reactStrictMode: true,
  images: {
    domains: ['www.freeiconspng.com'],
    disableStaticImages: true
  },
})

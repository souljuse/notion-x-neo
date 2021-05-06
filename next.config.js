// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  target: 'serverless',
  distDir: 'out',
  env: {
    rootNotionPageId: process.env.NOTION_PAGE_ID
  },
  images: {
    domains: ['pbs.twimg.com']
  },
  future: {
    webpack5: true
  }
})

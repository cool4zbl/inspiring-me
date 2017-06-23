// exports all components wherever they are
// Ref: Webpack require.context
// https://webpack.github.io/docs/context.html
const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  module.exports[componentName] = req(key).default
})

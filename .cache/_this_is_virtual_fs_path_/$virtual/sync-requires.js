
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/sampsa/Projects/sampsasaari.dev/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/sampsa/Projects/sampsasaari.dev/src/pages/index.js"))
}


const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/danielasofrone/Documents/TheContentFullGatsby/the-content-full-gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/danielasofrone/Documents/TheContentFullGatsby/the-content-full-gatsby/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/danielasofrone/Documents/TheContentFullGatsby/the-content-full-gatsby/src/pages/index.js"))),
  "component---src-templates-airplane-model-js": hot(preferDefault(require("/Users/danielasofrone/Documents/TheContentFullGatsby/the-content-full-gatsby/src/templates/airplaneModel.js")))
}


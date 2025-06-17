
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sakaits/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sakaits"
  },
  {
    "renderMode": 2,
    "route": "/sakaits/services"
  },
  {
    "renderMode": 2,
    "route": "/sakaits/about"
  },
  {
    "renderMode": 2,
    "route": "/sakaits/pricing"
  },
  {
    "renderMode": 2,
    "route": "/sakaits/contact"
  },
  {
    "renderMode": 2,
    "route": "/sakaits/impressum"
  },
  {
    "renderMode": 2,
    "route": "/sakaits/datenschutz"
  },
  {
    "renderMode": 2,
    "redirectTo": "/sakaits",
    "route": "/sakaits/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6757, hash: '426663788084d78cbecc36e62939fa83a5841dc28e5b2f0e28fd1d50c9bb129a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1689, hash: '5a5295814fd29e14c976dda65e40b0c51d1975d4798abc02c6fe90596caf10dc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 38537, hash: '3f19c7fa060f83f2c5040499a7a869414ee3628003adf63b82c7f8577fcd7c28', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'index.html': {size: 45422, hash: '9b940a3713b9de6a92c2c11b760652d4ec9a726896cba134ce3187afad58b821', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 35772, hash: '162836437634dd85ecda5fc1a59b690f023bd0ef9be0a4306d57b32a0080375c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'impressum/index.html': {size: 24114, hash: 'b45748669ad012c0dade14998c4fd20cf3f6629d151fefcf183b9fefa2e60889', text: () => import('./assets-chunks/impressum_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32802, hash: '06724d5a6458aa7f82d5d0d8746dbdf9458bf521ed2084d05ca5ba643e1b668f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 32003, hash: 'b0a8b8578653df0ee432aed23a7e5a597eed0d288d9748569bb930d79ae72c1d', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'datenschutz/index.html': {size: 28766, hash: 'a1f7f7168f86565e3480d3bc0aba62fe87aae3219856c8ee4b9d8a81d03fb9a8', text: () => import('./assets-chunks/datenschutz_index_html.mjs').then(m => m.default)},
    'styles-X477IOW3.css': {size: 305856, hash: 'ux0ITW6hCQw', text: () => import('./assets-chunks/styles-X477IOW3_css.mjs').then(m => m.default)}
  },
};

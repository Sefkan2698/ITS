
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ITS/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ITS"
  },
  {
    "renderMode": 2,
    "route": "/ITS/services"
  },
  {
    "renderMode": 2,
    "route": "/ITS/about"
  },
  {
    "renderMode": 2,
    "route": "/ITS/pricing"
  },
  {
    "renderMode": 2,
    "route": "/ITS/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/ITS",
    "route": "/ITS/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6678, hash: 'c3e48b7c0d022c12fb47d56bff48d63817640fd138df624fa0e1c71e6271cca2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1685, hash: '635d2a81049f826c5c8f51d4a39d14a9e506b49fd0b3dd8c1db5ec33041309e8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 30986, hash: '8aea23f6be5922f20121995bb5d46cc191f58b1e5dba3e746a12291a5c4483d6', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29305, hash: 'cc8c7bd3f48bd07110c670cc24d9d63a3212f75930400a9224fa49df673c1b07', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 24994, hash: 'bf3998fd0164b8f0d9d98813ae88474dbda36db0661ff5b96c1d1fe6c10dbfac', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28510, hash: 'db9054146b82770e6150557fa2c4708d3ad827dfeb9ea5932b75b934096f92a3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27402, hash: '35038c81942f64fb97c5ac39f258c69b660317ada57a707c9cd38dab2db2c433', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};

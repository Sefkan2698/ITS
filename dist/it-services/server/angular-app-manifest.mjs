
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/services"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/pricing"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6674, hash: '9e7fae075d7677aadf1bd48923eb4a55d834433e2f450e175e32dab962aed045', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1681, hash: '12aae55ad8370b456a02a78e5f1cdb0da682f960f2259e6c74ae73694767c0e9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 33051, hash: '6ae35c24cc6f97785ed81e2d2c181797e2f726aca384970de508d08ad90397bb', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 34812, hash: 'c52a67a902e2df5124acb9c3a340e445263f42a8d10999a170359d4c1242c8b2', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 28941, hash: '6c7e78e19506292f20dad5fbcbba0284884bd61c2452fd32ee4669bbafd5e84f', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32399, hash: '43d4703ae8b2de17942da5a2085341ed9fd4c08c7db6c1b9ec796e48829027ba', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31335, hash: '3883504e7ecf134d39c42bc16268396d34550df286aa006790773330922d7763', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};

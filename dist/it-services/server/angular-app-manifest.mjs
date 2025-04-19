
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/SakaIT-Solution/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/SakaIT-Solution"
  },
  {
    "renderMode": 2,
    "route": "/SakaIT-Solution/services"
  },
  {
    "renderMode": 2,
    "route": "/SakaIT-Solution/about"
  },
  {
    "renderMode": 2,
    "route": "/SakaIT-Solution/pricing"
  },
  {
    "renderMode": 2,
    "route": "/SakaIT-Solution/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/SakaIT-Solution",
    "route": "/SakaIT-Solution/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6690, hash: '54eaf822dc5ac4d4d6a1c7d85d751e69b1deff4166eca71f3d2da1ccf1faed95', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1697, hash: 'ecc286dc7197b917b8d853ab7e3fde943dc917e875a3581f8acfd86c1fcd5607', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 31094, hash: 'd4f0e474e0a3860a2aa4d04bd46def2775a79cdf0c9381389ea83a19e12ad214', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29413, hash: 'b16f129f33a45816c023b83602299cb0000c7b70d7a20c17fff2044d91714069', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27534, hash: '8cbba0d1a9d43dbb850cc15d934a1e6183db7eca774699f2644891b9e331f924', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28618, hash: 'b2a2e640fd6e2f8785c57ede5f994396acd4b199e3b4f81e96f1a7574032c0cc', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 25102, hash: 'b271f40609176b0e772a66f6fda8461cfbdac8bea956b22f8a9e8bb67d4cc545', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};

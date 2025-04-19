
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
    'index.csr.html': {size: 6730, hash: '9a89bdbca09003c25739747c6eb5c92d6076afe94516a1e051edd5df3c9eccf6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1729, hash: 'd052576865e71c9ff6dc54d624cc15fefd46bfdc44ce865c5ef33d2b9360c7ef', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 31134, hash: 'e6b6ca45eb096ff6eb8922c9953b3f6736a48c7d712b8539b2ab0d4bcc08748d', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 25142, hash: 'c8c2d911d058886ebcd79e2d2dd19aa01bad85d71e2b96ccec1b87eb3fa39f96', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27574, hash: '06449e8cc17b080c224b45e00c407800db0e915afd190a6871c50e4271e56101', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29453, hash: '85e9eeaf178a57bb4e04f26645c6eb87cde9284aa5fd89ffe85939346e425354', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28658, hash: '346c1f9b267cd18f139b0ed2f8e2fecd73fcaf42f6bb2b02c4efce7820cd17fb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};


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
    "route": "/impressum"
  },
  {
    "renderMode": 2,
    "route": "/datenschutz"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6709, hash: '1389a5f6f8e9e4fe9f9e0349ac48f31548109f972d3e6716621e506ca3cdb515', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1649, hash: '339bbd128584f1e018bc3019bb6880da41a51ea3fbfd2f85d2fa7ec918d0bee1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 45270, hash: '4d4b1cf00d35cdd670f2d55768ce4239a9dd56a859281eeec4e784ad975816e9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 38393, hash: '8ab953e43292569e0a279118d4321994409560aa2b1c786fa4f450a187a074b6', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 31859, hash: 'b7f070d480d413c47c66fb46524fae571be76ef2aa45eede33913c1c348065d3', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 35628, hash: '580f6f999996a60c6b5a4408024ec7d2ea2dcdc8c6201f514c7ecf6fe3311db6', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'impressum/index.html': {size: 23978, hash: '8de7e9f15a853d357337e38ba4892cf98a65f752ec6c9d196a66092dccc4b8f0', text: () => import('./assets-chunks/impressum_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32666, hash: 'f00d939ab30b7c30f1b43ab1ebbb3ff3a74817134688d077dcbb4fde81c37d44', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'datenschutz/index.html': {size: 28630, hash: '5f025f0ce41eac5b019b3dc06ae0c958a0b651670c9e8a7c4e2bcee8cedc1214', text: () => import('./assets-chunks/datenschutz_index_html.mjs').then(m => m.default)},
    'styles-X477IOW3.css': {size: 305856, hash: 'ux0ITW6hCQw', text: () => import('./assets-chunks/styles-X477IOW3_css.mjs').then(m => m.default)}
  },
};

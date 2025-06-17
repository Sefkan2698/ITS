
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
    'index.csr.html': {size: 6709, hash: 'f29f6f7273560587d852dd030cf94b81f7336340dd7f3776601b22bfc14aa387', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1649, hash: '947274e184ffef4ee6b0565f77adb8b57e67467cc70a472c3d73697097f00a76', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 38393, hash: 'cd430905a956669efe124d018ae2d50e734ad0148fc76c3efbfd5a5f1a2ed797', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 35628, hash: '10ec00f8bb764554cf9767aaf9f3144a9df24a53914eea283dc55dc99b469073', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 45394, hash: 'b34f5e81949d90998bafd60cdc71a47b86f9c848b63ca412b9fd86d41f6da580', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'datenschutz/index.html': {size: 28630, hash: 'f46f3c2c87391cd7df7b89d295220a5eea42c41b76ef83d91a8046c52e939e09', text: () => import('./assets-chunks/datenschutz_index_html.mjs').then(m => m.default)},
    'impressum/index.html': {size: 23978, hash: 'b74ca2920e5d203e7d2f0bf3e638ab3a42916f721db360ee982510d882a0cfa7', text: () => import('./assets-chunks/impressum_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32666, hash: '6f7f470e2a2e33cfb8e586e53767d4df14f0a2c11fb647f03515d7bdba78ea9b', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 31859, hash: '7e11ebecc8b42524123db1949c916bd23eb01f1cfa7da4fd40e2c00bd56e409d', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'styles-X477IOW3.css': {size: 305856, hash: 'ux0ITW6hCQw', text: () => import('./assets-chunks/styles-X477IOW3_css.mjs').then(m => m.default)}
  },
};

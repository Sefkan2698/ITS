
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
    'index.csr.html': {size: 14331, hash: '760b1c32ca3d4bb2d6a6b8b0b189050b77d0ac2176ffc752e0103a03ea317988', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9271, hash: 'd7ccc82f9b9d1525df529aa30bb69a3676341f354f4a1366318fb72d7e7e99de', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 45758, hash: 'c0c2c5ce8b1c38dd2898a18d8177657f65613e6e8760b912b4b198546960679d', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 42993, hash: 'e20533e1c81c2da33180966fd165e9b8c7ad5aff31eb79e71e5f31e56dc1a569', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 39224, hash: '78926ec690f8169354ba1afbb4f92dfa420079f97ce242d0b63cbd1a182d1f2a', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'index.html': {size: 52759, hash: '2a634574632c075902e688c09e86d19a64714afe6c3fe13fe6e137d4a67ea306', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'impressum/index.html': {size: 31343, hash: '3a4cd76534561138699cd63da2f3d030a046216053f9fd97a823157a2f70b55c', text: () => import('./assets-chunks/impressum_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 40031, hash: 'e13c7104b52dc696cd1c6901cc9772969888c08ff7b9ea7d4047a348bc0052ab', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'datenschutz/index.html': {size: 35995, hash: '3b6a304310f6942299bbdda9daaa7d8c540fbe66013049001d5033f7fdd68410', text: () => import('./assets-chunks/datenschutz_index_html.mjs').then(m => m.default)},
    'styles-X477IOW3.css': {size: 305856, hash: 'ux0ITW6hCQw', text: () => import('./assets-chunks/styles-X477IOW3_css.mjs').then(m => m.default)}
  },
};

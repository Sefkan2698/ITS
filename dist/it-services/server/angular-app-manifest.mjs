
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
    'index.csr.html': {size: 6709, hash: '26c89c056b300e619541a4e1d4d2d4833568af1d7ac3869807e04fa674c34671', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1649, hash: '65cf03ddcd3b1271f6aa335baa78d6103c49291ec74d258f5284742788005b71', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 38393, hash: 'b5150683254e6155d97d5fccaf357259d78447cae6b742473ab18325bc90a0e9', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 35628, hash: '08690d90b67a04105d16f3db1faf422f1fb6daf379c0022c4ec5711d21bf556e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 31859, hash: 'f9e1384d1bc93a1d8419b83a4eef376a82575d609b872b4e4ad4551796abf375', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'impressum/index.html': {size: 23978, hash: '1c7e1ed77a957add883e65e7ea26d82f1029d67b8c87c1c08ca06158973c5307', text: () => import('./assets-chunks/impressum_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32666, hash: '71dab4db165a0ed814c10052066349752993132ab70a194d376f109d0a619d91', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'datenschutz/index.html': {size: 28630, hash: '5fa3cbdbdbc679883175bb5b5735b0fcb4f0c46065aa92c581a8b84ca3c105a6', text: () => import('./assets-chunks/datenschutz_index_html.mjs').then(m => m.default)},
    'index.html': {size: 45394, hash: '25b18d776c135086ebe06c00e3f405039206e37e8a2be3b122d0f4c98b52538e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-X477IOW3.css': {size: 305856, hash: 'ux0ITW6hCQw', text: () => import('./assets-chunks/styles-X477IOW3_css.mjs').then(m => m.default)}
  },
};

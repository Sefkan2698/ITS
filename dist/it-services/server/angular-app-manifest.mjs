
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
    'index.csr.html': {size: 6749, hash: 'ff8528080d72e0b2d21e35e2407222049aa5d67c03dd1c9aafd53bbca99b75a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1681, hash: '08ea4d9c223a84b2d70464976b313a0f53541a96bda7b3b7f0b2171acc9210c9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 35668, hash: '2f6838b4c075abcb95fcb2bb2fffb5a5d51a65aa3fed13bc4cdf1a8c9c273977', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 38433, hash: '4afeb491abdb06c5db737c46cd03d9312a592ae32b3900f3cc54963d9ad7eb05', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'index.html': {size: 45310, hash: '8bd9cf1c8c701afb1873970e91724a96060c5a989bd5d9e137ada9567d78f031', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 31899, hash: 'a8bc45c93839556344bb6849f139a2c27a18c0c69ccc7cf1ed2c8f893da4a110', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32706, hash: 'b6bd5cf9204630df86a1d137bf41a10437422913a835bd9eafea26ab32593b2a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'impressum/index.html': {size: 24018, hash: '0163471efd9e2b7ec5bbcd5e0d1a97e798a4ad2e4a2a95c5ff5c3ccd7c42b5e6', text: () => import('./assets-chunks/impressum_index_html.mjs').then(m => m.default)},
    'datenschutz/index.html': {size: 28670, hash: '54e37937c774e58667871d6d79d81734937fb8c5887bf2d14018a639c5a03216', text: () => import('./assets-chunks/datenschutz_index_html.mjs').then(m => m.default)},
    'styles-X477IOW3.css': {size: 305856, hash: 'ux0ITW6hCQw', text: () => import('./assets-chunks/styles-X477IOW3_css.mjs').then(m => m.default)}
  },
};

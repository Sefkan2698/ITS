
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
    'index.csr.html': {size: 6674, hash: 'b1a82ace3dc0a5826f2bf1e1b5a18a5e9adb9613003445cf0972dde961036dae', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1681, hash: '7e2c3692510e994ef10d9ff6693f55094cec2f540648620a6f97b1b82bab3502', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 34819, hash: '6904d2873d5948728f02a247d8e727ef2925c54d8450a4e2dc2cfa9c039f0cf9', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 28941, hash: '6a6630c3424dfb3ea99b1357d02859ca8aebc045faa205b01e31ccd537d2697f', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 33051, hash: '6fdda42e4275eb4d36b89fb2ea8afcf9fb998788f2ba5b2fd1ab81e68a798b00', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32399, hash: '69e0a7eb0b2f88a71b750528d8b58f32ed88a90ebce435f465dbfdb58ebe71d8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31335, hash: '8c2d10278cacfb0c1d0761d28ee10700683ccc3223b3696377866135831cfbb7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sakaits/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sakaits"
  },
  {
    "renderMode": 2,
    "route": "/sakaits/services"
  },
  {
    "renderMode": 2,
    "route": "/sakaits/about"
  },
  {
    "renderMode": 2,
    "route": "/sakaits/pricing"
  },
  {
    "renderMode": 2,
    "route": "/sakaits/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/sakaits",
    "route": "/sakaits/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6682, hash: 'bf121395b2b6ed2147be77e68a41c6661ffb7b5e0c8f50f0d249c5b8c59e8450', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1689, hash: '18dcecd3d6990265d54e954cfc3ba0986206c4ae220f091d0aad44d88a2c7c7b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 37958, hash: '713406d11f315e1a64f95732af39482d49e3e08cdcb50f4afa78119ee662c481', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 29261, hash: '0555c6052b69e2e67d2c4136b3c8b0de1c30575c4272d0c62f51710f2ed57c35', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 33364, hash: '5bdb1507705d19763c74e35c3db4f5ead8c2ad93e9a0b63ac4c2de9def669665', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32711, hash: '2308b6bda946fcc61dc8c69c6803342924cc07d47e9afd46ff05e19ded1cab16', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 32617, hash: '374d83160f9f0a3672203fed9767c90d657cb18471fdc305cc5edb3198e1e824', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};

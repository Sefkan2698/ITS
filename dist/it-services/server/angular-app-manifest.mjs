
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
    'index.csr.html': {size: 6674, hash: '92a99f746487983c6672b5e9a78f190cda413bb717b89e888ab3050e3cd2e91c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1681, hash: 'cc8cfb2f21b5531dc9c2832db9ad0c154b538a4b0f876116fa4d97f8070e9c2c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27358, hash: '8555a0532a211b05b4d12dc1b7fa98f76cfd7288cb3cbbe6960a562ad4f13d57', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28451, hash: '5217a845d1c20dac6bc01188196d8b7ecd1f87dcfa8be62687f47b2dd4e44217', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 30950, hash: 'c3d5cff989ea2792a37a98b9f9a4ea9abc9fac9567c7930dc7444c39d60d21e7', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29269, hash: 'a0153e25556581a67ee173eeabfd753b9ad69bda3b56f93ec3e5a1c907d457ac', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 24971, hash: '9158c4f41cefcc04d4228c3a7383e94ec6159393ec6e1c0824171a8a5237cd5c', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};

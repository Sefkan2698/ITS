
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
    'index.csr.html': {size: 6674, hash: '93c130c974e8e6b29ace177013b60c4d39fb6138fbc819430810c8b5e845a07d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1681, hash: '018af5c409edf85af91878e83b616b15bfc0eb935cfaf2829250626acc913398', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 30950, hash: '09fe455c32b1efac8ce1aa2081c956a32b9fa134fc77501a8f95ffd298d3baf0', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29269, hash: '1a2ee43ed7fe8536e7806994f891767c9e739677e4257807605dc20b78de8813', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 24971, hash: 'b1826dd8b30bfabcab131f6db84e4faf286a3ab57261cd06c502da3d9b182d90', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27358, hash: 'a91e2b1d94fdaa36b78b7b9ca73d09b7afed11a43d5f19a9efe61d4b8d2de717', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28467, hash: 'd51d68b205f009255ab075f01c851f1676a61bd088cf94130ea82bf411940946', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};

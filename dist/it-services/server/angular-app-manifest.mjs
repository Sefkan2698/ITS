
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
    'index.csr.html': {size: 6674, hash: 'c88e04bae3144c70fa51a7bc74346c3b52916bbd641dcaae89e2376b9c4fedb0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1681, hash: '48ac2ff3358a8408eb10d1125971104385b6b2bf85643feaf2fbbcd0251839d9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 30950, hash: '4e6196f3ba3a61684df5daaa9657079e0ffe3517f7c0a48b82db088ef38c8323', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29269, hash: '1a804a194e94173c6fc5c3e1ed7cd284070d19b6a0bc4c3d71a2ac657422db19', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27358, hash: '8d7a28cefff5ffd510afd43584c2041ca6b89f4c4475cc587f4bc2561ec5b16e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28471, hash: 'd28a3179164d3a8a021745d537f2bf8faf3c00ded4252c9ac06da138fbca0f39', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 24971, hash: '66226b8d6199c5cbc864df108026e0d6a08f4c39d2eb907d970b0987ab25531d', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};

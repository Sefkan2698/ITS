
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
    'index.csr.html': {size: 6674, hash: '764e926e821cd98b67cee23a8423464b385b61bc30855ffc170394a47efd7ea3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1681, hash: '85b1639e570b3615e5720aab437fe9c48baba799749d6c88c789459e454272f3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 27358, hash: 'e207ad4c8acbc70aa03da126321c5cd646c2bb81b168c55ef960ad731e763a71', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 30950, hash: '5de876dd2905b3318dc75ec290d3b57c35fb7f890748d0f5584c9e27c419162c', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29269, hash: '460fb6779bf019dc4dd9e26246dabcba43413fb03afcd122b41b273755348c09', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28467, hash: '3fa7eab093a2c3d0b290d1d86314cbdd8160ffc5a2d8cb778a1a98752b31ea39', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 24971, hash: 'd580efb5f2d78d40fed3b52f74ce5663ddda99031c0f08246cada946b45582c9', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};

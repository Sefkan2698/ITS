
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
    'index.csr.html': {size: 6682, hash: 'ec7d614f0c1521963d308b499164d8dbae5f11542035370b799250b3166ef669', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1689, hash: 'fcc29304850f7c22ff1614417c46b64d301bc6fdc7ac5789ab1c89fc90affdaf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 34891, hash: '4bad0592288248c5a7d9569c72920c0003ffe84986c57541250e97e4b489abe3', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 33123, hash: 'e5f26b04c1be1e80baa6139d9ec3b94aa45420125e2e6b3ddd6e0f16a8b07d80', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31423, hash: 'a1d3c5ed593596c76fd851867ecf21c1cfb63ff5688431435dcb244452f6c261', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 29021, hash: '84450ddd892e4b2cbdd86e933594e560c5f4863673f41ea4670c69d260058e69', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32471, hash: 'be624ccbe098e61171821ba34e0d7a59473c7e9f8b26403ea755773109b0ae5e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};

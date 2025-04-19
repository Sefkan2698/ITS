
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
    'index.csr.html': {size: 6674, hash: '12e84ba957cffa326f742e21a4d5381785deb9d38b52a847eef05018e2bd9fff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1681, hash: 'd390234268771e2d774e4e6a947d67d50f75adae4a6ab2203a6e4edd58a47295', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 30950, hash: '961a6f7918ea61d8c154e1c2a99e60f2e58b05537b30a8f47504011eaaa4bc70', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 29269, hash: 'da8548251cbbc34e3f29914c5e39491b1a9b1f4330c9c8c4110558e58405f7e4', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 27358, hash: '5b69f84432ccef8d0d52b0f852924f19aef77b218b0e91f7ec789561c4681ecf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 28451, hash: '24fa6188adc0d99c333b6ad60b6a49d07b8afb2bf7f3dd45ec326e375c4b14d5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 24971, hash: '6d1b698729f3224cc8ee8b6c3c69929df7242a420a41341abe3beacdb087d3b5', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};

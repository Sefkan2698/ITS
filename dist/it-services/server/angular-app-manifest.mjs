
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
    'index.csr.html': {size: 6674, hash: '43f93e512a85b47cb4f7a8946072943aa951020f127ef0c8e3bd004c152bcbdf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1681, hash: '8313c7abdf5a38a8b2d575d39e95a21ae07865a2d4bc25b0543b74f0a65dc96c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 34812, hash: 'e17c36cf6d32cea38eb0c0d5d62e9ae2b5d05a2e00f0ac8b17ce85e5de008d1e', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 33044, hash: '46a6fdcfcd8b6e282932cdc0dc9a85158c301ef4680ab5ef31741d6ba168724e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32399, hash: '9bb50f41abd925b1f01ee6fb9a3812e803f85905db404f3926becf3c549c6d0d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31335, hash: '5ceca186c2c1054b95123ab7ff3d5fa7a07127979a7e3ba4ec86df9750f12c6e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 28941, hash: '08f3caf5483e46d501347171c2212d284054ea6a7e270fa55cd142808ceb6f68', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};

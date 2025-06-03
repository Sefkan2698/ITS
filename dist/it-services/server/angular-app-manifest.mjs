
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
    'index.csr.html': {size: 6682, hash: '47553276f54f08a31548d42e071dc8966c046a9d6199ae4a6bf5352dcaf56707', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1689, hash: 'bf524ef40e3d3d12c19813b287d31c98a0930c67b544656fdd1e639d5835d02d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 34892, hash: 'e3653e0c8bf1ba1d785647bb0146d6cff9b987d2f99a3e462747e7a02923beb5', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 33123, hash: '35442a17f80e3fb00d5fa8cc0079de91797d38fd106ec6e3d15b89836c1abfe1', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31423, hash: 'aed6ef3989a07edee1f0407219fa2b047249c58de05fcb6d90ca029d2638f83b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 29021, hash: '7d5c15bc743ca6f7f844739640ce43d8076983f6055104fc1f09836d02cb3eb6', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32471, hash: '17a0c970b3858d2b591c8009f843ccf3003b600e8830b5e1f284bc93525a68c8', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};

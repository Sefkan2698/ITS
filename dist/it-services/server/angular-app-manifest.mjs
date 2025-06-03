
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
    'index.csr.html': {size: 6674, hash: 'bc06318291f6afef25b29903d217fd4429662a0cd1fd3d26a644356daab0138f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1681, hash: '2d0df5a971b3c44df56a8e6aa613c50e35e30a97936536228ac6516dff6f987b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 37878, hash: 'b3452add9e3bb263d18cb1a400f451f149ab62c017a5541e51db72037711dfdb', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 33284, hash: '7b58804de3d6c535ee287a7b8c199b8fcfcbdb1628b4f68b580a91fbfcbb149f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 29181, hash: '3798a712a7f4a9d2cdfc98f5e76c6915bf4d1a67fa9676572e41ced1f43eaef8', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'index.html': {size: 32529, hash: 'ad0bf8e99b18878f485e0e6778c5527945c1473932b2425d3a4523a0342347e2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32639, hash: '80cc40bb3debcb4839ff7389266055311adbf60cd0b2fc094b75c1bc951a74f4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-HXF4TWH2.css': {size: 304751, hash: 'BRKnlPILCIs', text: () => import('./assets-chunks/styles-HXF4TWH2_css.mjs').then(m => m.default)}
  },
};

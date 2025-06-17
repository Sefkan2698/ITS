
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ITS/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ITS"
  },
  {
    "renderMode": 2,
    "route": "/ITS/services"
  },
  {
    "renderMode": 2,
    "route": "/ITS/about"
  },
  {
    "renderMode": 2,
    "route": "/ITS/pricing"
  },
  {
    "renderMode": 2,
    "route": "/ITS/contact"
  },
  {
    "renderMode": 2,
    "route": "/ITS/impressum"
  },
  {
    "renderMode": 2,
    "route": "/ITS/datenschutz"
  },
  {
    "renderMode": 2,
    "redirectTo": "/ITS",
    "route": "/ITS/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6753, hash: '808cd06be9fed73b10fce395d40270dffa0d0a2b9559208a0edd28b056b81a77', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1685, hash: 'baceec45b3ae0f9d271b2716daeffca43e4a607c730d03aef405397786980996', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 38485, hash: '5e75bcf8800b5753a8e7d16c31a233d67e28821179d135b50c729f78021330d5', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 31951, hash: '2ca54b8351bc847df18eb9618fe775c95c67b0c86b10b7a00b42844ed3ae56ce', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 35720, hash: '059e67011931f2d964040de788286455dfcccf32a9f8e627e839e186c71c7da3', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32754, hash: 'aef9da1cf16eaf76ec78644eb74458a93692dab3285ccc493b37d4e85795c2ea', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 45366, hash: '1c302590febd5ef1736b767ce7ba0b92f8d31ca87172d38d5baaa71c18e78d37', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'datenschutz/index.html': {size: 28718, hash: '001beffb880dc051f50cd27b1989d4da5f86fc1e5477c5ed09d27e97f34584a1', text: () => import('./assets-chunks/datenschutz_index_html.mjs').then(m => m.default)},
    'impressum/index.html': {size: 24066, hash: 'a85e6347e7bf944199c0391ebb4a5678a610023da12141ce0a79992d9cee4a34', text: () => import('./assets-chunks/impressum_index_html.mjs').then(m => m.default)},
    'styles-X477IOW3.css': {size: 305856, hash: 'ux0ITW6hCQw', text: () => import('./assets-chunks/styles-X477IOW3_css.mjs').then(m => m.default)}
  },
};

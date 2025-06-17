
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
    "route": "/impressum"
  },
  {
    "renderMode": 2,
    "route": "/datenschutz"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14331, hash: 'cefdadc3c9f71bc28c96425c300c2eea657cd06c0b7e921a5dff753348cb15c1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9271, hash: 'b13f32ad4560b39800fbe592f4721f003c74f560fd4c789c3a1a88fceea63d5f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'services/index.html': {size: 45758, hash: '16a66a1f433d5920fe4d4ba0ec86c1a6d7c09b418e765f9973c918dabc50dfa2', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 42993, hash: 'd40107bb6086b3dc3b50e12ab8ac74016f5f452d7b354eeb77ce3d200018b2b0', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 39224, hash: '297f78bda74a11fa0d0bab290ae7f7c0273a4ab27050e714d14a976fbd60adaa', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 40031, hash: '6519ce7458bf7d433cb0974e27eb634a67ec9b27e0ebffa558b5b2bfe5ace94c', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 52759, hash: '98782ed3dd13738912bb441f72a85117c83218bc2bcd697b6f1901acd9e35fbc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'datenschutz/index.html': {size: 35995, hash: 'b0f75a1e0907bf756ce7434e717b341b7b8cd0d933e854f40ea0eb48d4a058a7', text: () => import('./assets-chunks/datenschutz_index_html.mjs').then(m => m.default)},
    'impressum/index.html': {size: 31343, hash: 'd10f3bc27417e80be7da74e9592f9da9e2e159b8306f94e94e49760036d82399', text: () => import('./assets-chunks/impressum_index_html.mjs').then(m => m.default)},
    'styles-X477IOW3.css': {size: 305856, hash: 'ux0ITW6hCQw', text: () => import('./assets-chunks/styles-X477IOW3_css.mjs').then(m => m.default)}
  },
};

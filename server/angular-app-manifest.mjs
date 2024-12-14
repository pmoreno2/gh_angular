
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/rick-and-morty"
  },
  {
    "renderMode": 2,
    "redirectTo": "/rick-and-morty",
    "route": "/rick-and-morty/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 511, hash: 'c6dd6dc5d44450e5695f4746239edc682a2afed76f55e509fc9e7e813141f61b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1024, hash: '83a9c708b7348c56f6c1cb00c15c37e29ee8d5b7446114410ec1dd12cd1a4f9c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 36936, hash: 'a205625f333ba1ed1e28f46f092c6618c253a749de94ebc085fa58e9d86a832c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};

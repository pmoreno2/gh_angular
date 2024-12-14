
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/gh_angular"
  },
  {
    "renderMode": 2,
    "redirectTo": "/gh_angular",
    "route": "/gh_angular/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 507, hash: '3a3e146c904b0ba08431cadbde774c58519d9673f5e7348cbcd6673fda03e54b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1020, hash: '7fc0a7e08614283932d2c332d12d942af463795d0a891fc35c933d5fdded14d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 36932, hash: '8193b5fa412c4c9fe50f6a45a70f53b4e08995d5f3b9417e11c4557fc0b575c5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};

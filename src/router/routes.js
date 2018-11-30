
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),

    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        path: 'start',
        component: () => import('pages/Home.vue')
      },
      {
        path: 'waren',
        component: () => import('pages/Waren.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

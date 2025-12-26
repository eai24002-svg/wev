import { watch } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { t, locale } from '@/i18n'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
    meta: {
      titleKey: 'meta.home.title',
      descriptionKey: 'meta.home.desc',
      transition: 'page',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/About.vue'),
    meta: {
      titleKey: 'meta.about.title',
      descriptionKey: 'meta.about.desc',
      transition: 'page',
    },
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/pages/Services.vue'),
    meta: {
      titleKey: 'meta.services.title',
      descriptionKey: 'meta.services.desc',
      transition: 'page',
    },
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/pages/Portfolio.vue'),
    meta: {
      titleKey: 'meta.portfolio.title',
      descriptionKey: 'meta.portfolio.desc',
      transition: 'page',
    },
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('@/pages/Team.vue'),
    meta: {
      titleKey: 'meta.team.title',
      descriptionKey: 'meta.team.desc',
      transition: 'page',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/Contact.vue'),
    meta: {
      titleKey: 'meta.contact.title',
      descriptionKey: 'meta.contact.desc',
      transition: 'page',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('@/pages/NotFound.vue'),
    meta: {
      titleKey: 'meta.notfound.title',
      descriptionKey: 'meta.notfound.desc',
      transition: 'page',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (to.path !== from.path) return { top: 0, behavior: 'smooth' }
    return { top: 0 }
  },
})

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function applySeo(to = router.currentRoute.value) {
  const titleKey = (to.meta?.titleKey as string | undefined) ?? 'meta.home.title'
  const descriptionKey = (to.meta?.descriptionKey as string | undefined) ?? 'meta.home.desc'

  const title = t(titleKey)
  const description = t(descriptionKey)

  document.title = title
  setMeta('description', description)

  // OpenGraph placeholders (kept stable but updated per route where possible)
  const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
  const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
  if (ogTitle) ogTitle.setAttribute('content', title)
  if (ogDesc) ogDesc.setAttribute('content', description)
}

router.afterEach((to) => applySeo(to))
// React to locale changes while staying on the same route
watch(locale, () => applySeo(), { flush: 'post' })

export default router



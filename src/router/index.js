import AboutPage from '@/pages/AboutPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import HomePage from '@/pages/HomePage.vue'
import NewsPage from '@/pages/NewsPage.vue'
import OurWorkPage from '@/pages/OurWorkPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/about",
      component: AboutPage
    },
     {
      path: "/news",
      component: NewsPage
    },
    {
      path: "/work",
      component: OurWorkPage
    },
     {
      path: "/contact",
      component: ContactPage
    }
  ],
})

export default router

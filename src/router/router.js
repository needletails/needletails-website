import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import NotFound from '../pages/NotFound.vue'
import WhyCartisim from '../pages/WhyCartisim.vue'
import Terms from '../pages/Terms.vue'
import Privacy from '../pages/Privacy.vue'
import Solutions from '../pages/Solutions.vue'
import TechArticle  from '../pages/TechArticle.vue'
import TechContent from '../components/TechContent.vue'
import EmailVerification from '../pages/VerifyEmail.vue'
import PasswordResetter from '../pages/PasswordResetter.vue'
import Success from '../pages/Success.vue'

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else
      if (to.hash) {
        return { selector: to.hash }
      }
      return { left: 0, top: 0 }
    },
    routes: [
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
    {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/why-cartisim',
        name: 'why-cartisim',
        component: WhyCartisim
      },
      {
        path: '/solutions',
        name: 'Solutions',
        component: Solutions
      },
      {
        path: '/privacy',
        name: 'Privacy',
        component: Privacy
      },
          {
        path: '/terms',
        name: 'Terms',
        component: Terms
      },
      {
        path: '/email-verification',
        name: 'emailVerification',
        component: EmailVerification
      },
        {
    path: '/tech-article',
    name: 'TechArticle',
    component: TechArticle,
    children: [
      {
        path: '?article=:id',
        name: 'article-content',
        component: TechContent,
        props: true
      }
    ]
  },
  {
    path: '/password-resetter',
    name: 'passwordResetter',
    component: PasswordResetter
  },
  {
    path: '/success',
    name: 'success',
    component: Success
  },
]
})
router.resolve({
  name: 'not-found',
  params: { pathMatch: ['not', 'found'] },
}).href
    export default router
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/pages/HomePage';
import ToursPage from '../views/pages/ToursPage';
import TourguiedsPage from '../views/pages/TourguiedsPage';
import BlogPage from '../views/pages/BlogPage';
import CustomizePage from '../views/pages/CustomizePage';
import BloginfoPage from '../views/pages/BloginfoPage';
import BookPage from '../views/pages/BookPage';
import PyramidsPage from '../views/pages/PyramidsPage';
import FavoPage from '../views/pages/FavoPage';
import CheckoutPage from '../views/pages/CheckoutPage';
import PolicyPage from '../views/pages/PolicyPage';
import TermServices from '../views/pages/TermServices';
import ContactPage from '../views/pages/ContactPage';
import AboutPage from '../views/pages/AboutPage';
import AllphotosPage from '../views/pages/AllphotosPage' ;
import Tour_gprofilePage from '../views/pages/Tour_gprofilePage';
import HeaderComp2 from '../../src/components/HeaderComp2';
import NotificationsPage from '../views/pages/NotificationsPage';
import UserprofilePage from '../views/pages/UserprofilePage';
import FAQPage from '../views/pages/FAQPage';
import DownloadHisPage from '../views/pages/DownloadHisPage';




import DestinationsComp from '../views/destinations.vue';
import DestinationsSearch from '../views/search.vue'
import DestinationsSearchSingle from '../views/search-single.vue'
import TourSearchSingle from '../views/tour-single.vue'






const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/tours',
    name: 'tours',
    component: ToursPage
  },
  {
    path: '/tour-guides',
    name: 'tours-guides',
    component: TourguiedsPage
  },

  {
    path: '/blog',
    name: 'blog',
    component: BlogPage
  },

  
  {
    path: '/customize',
    name: 'customize',
    component: CustomizePage
  },

  {
    path: '/blog-info',
    name: 'blog-info',
    component: BloginfoPage
  },

  {
    path: '/book',
    name: 'book-page',
    component: BookPage
  },
  {
    path: '/pyramids',
    name: 'pyramids-page',
    component: PyramidsPage
  },

  {
    path: '/favo',
    name: 'favo',
    component: FavoPage
  },
  {
    path: '/checkout-page',
    name: 'checkout',
    component: CheckoutPage
  },
  {
    path: '/policy',
    name: 'policy',
    component: PolicyPage
  },
  {
    path: '/term_of_services',
    name: 'term',
    component: TermServices
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/photos',
    name: 'all-photos',
    component: AllphotosPage
  },
  {
    path: '/nav2',
    name: 'nav_2',
    component: HeaderComp2
  },
  {
    path: '/notifications',
    name: 'notify',
    component: NotificationsPage
  },

  {
    path: '/u-profile',
    name: 'u-profile',
    component: UserprofilePage
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQPage
  },
  {
    path: '/tour-guide',
    name: 'tour-guide',
    component: Tour_gprofilePage
  },
  {
    path: '/book',
    name: 'book',
    component: BookPage
  },
{
  path: '/destinations',
  name: 'destinationsComp',
  component: DestinationsComp
},
{
  path: '/search',
  name: 'search',
  component: DestinationsSearch
},

{
  path: '/search-single',
  name: 'search-single',
  component: DestinationsSearchSingle
},

{
  path: '/tour-single',
  name: 'tour-single',
  component: TourSearchSingle
},

{
  path: '/download',
  name: 'download',
  component: DownloadHisPage
},






  
  





  
  
 
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

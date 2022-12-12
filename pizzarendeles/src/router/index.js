import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import PizzaView from '../views/Pizzas.vue'
import DrinkView from '../views/Drinks.vue'
import CartView from '../views/Cart.vue'
import CredentialsView from '../views/Credentials.vue'
import FinishOrderView from '../views/FinishOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pizza',
      name: 'Pizzas',
      component: PizzaView
    },
    {
      path: '/drink',
      name: 'Drinks',
      component: DrinkView
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartView
    },
    {
      path: '/setup-order',
      name: 'Setup Order',
      component: CredentialsView
    },
    {
      path: '/finish-order',
      name: 'Finish Order',
      component: FinishOrderView
    }
  ]
})

export default router

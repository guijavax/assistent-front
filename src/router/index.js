import Index from '@/components/Index'
import Client from '@/components/Client'
import Login from '@/components/Login'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/client',
    name: Client,
    component: Client
  },
  {
    path: '/login',
    name: Login,
    component: Login
  }
]
export default routes

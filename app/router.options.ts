import type { RouterConfig } from '@nuxt/schema'
import type { RouteRecordRaw } from 'vue-router'

// 👉 Redirects
const redirects: RouteRecordRaw[] = [
  // ℹ️ We are redirecting to different pages based on role.
  // NOTE: Role is just for UI purposes. ACL is based on abilities.
  {
    path: '/',
    name: 'index',
    redirect: to => {
      console.log('🔴 In redirect function....')

      // TODO: Get type from backend
      const userData = useCookie<Record<string, unknown> | null | undefined>('userData')
      const userRole = userData.value?.role

      console.log('userData :>> ', userData);
      console.log('userRole :>> ', userRole);

      if (userRole === 'admin')
        return { name: 'dashboards-crm' }
      if (userRole === 'client')
        return { name: 'access-control' }

      return { name: 'login', query: to.query }
    },
  },
]

const routes: RouteRecordRaw[] = []

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
  routes: scannedRoutes => [
    ...redirects,
    ...routes,
    ...scannedRoutes,
  ],
}

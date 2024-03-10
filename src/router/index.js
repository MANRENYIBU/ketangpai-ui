import VueRouter from "vue-router"

export default new VueRouter({
    routes: [
        { path: '/login', component: () => import('@/views/login/index'), hidden: true },
        { path: '/404', component: () => import('@/views/404'), hidden: true },
        { path: '/register', component: () => import('@/views/register/index'), hidden: true },
        {
            path: '/',
            redirect: 'login'
        }
        // {
        //     path: '/',
        //     component: () => import('@/layout'),
        //     redirect: '/home',
        //     children: [
        //         {
        //             path: 'home',
        //             name: 'home',
        //             component: () => import('@/pages/home'),
        //             meta: { title: '首页', icon: 'home' }
        //         }
        //     ]
        // }
    ]
})
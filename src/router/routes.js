import auth            from '@/app/middlewares/auth'
import guest           from '@/app/middlewares/guest'

import DefaultLayout from '@/views/layouts/Default'

const routes = [
    {
        path: '/login',
        component: () => import('@/views/pages/auth/Login'),
        name: 'login',
        meta: {
            middleware: [guest],
        },
    },
    {
        path: '/logout',
        component: () => import('@/views/pages/Logout'),
        name: 'logout',
        meta: {
            middleware: [auth],
        },
    },
    {
        path: '/',
        component: DefaultLayout,
        meta: {
            middleware: [auth],
        },
        children: [
            {
                path: '/dashboard',
                component: () => import('@/views/pages/dashboard/index'),
                name: 'dashboard',
                meta: {
                    middleware: [auth],
                },
            },

            {
                path: '/',
                redirect: '/dashboard',
            },
            {
                path: '/:catchAll(.*)',
                component: () => import('@/views/pages/PageNotFound'),
                name: 'notFound',
            },
        ],
    },

    //=========================sales quotations
    {
        path: '/lsm/',
        component: DefaultLayout,
        children: [
            {
                path: 'course',
                name: 'lsm.course.list',
                component: () => import('@/views/pages/courses/List'),
                meta: {
                    middleware: [auth],
                },
            },
            {
                path: 'coupons',
                name: 'lsm.coupon.list',
                component: () => import('@/views/pages/coupon/List'),
                meta: {
                    middleware: [auth],
                },
            },
            {
                path: 'coupon/create',
                name: 'lsm.coupon.create',
                component: () =>
                    import('@/views/pages/coupon/Create'),
                meta: {
                    middleware: [auth],
                },
            },
            {
                path: 'coupon/:id/edit',
                name: 'lsm.coupon.edit',
                component: () => import('@/views/pages/coupon/Create'),
                meta: {
                    middleware: [auth],
                },
            },
        ],
    },
]

export default routes

import { createRouter, createWebHistory } from 'vue-router';


import UsersList from './pages/UsersList.vue';
import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import UsersFooter from './pages/UsersFooter.vue';
import TeamsFooter from './pages/TeamsFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    meta: { needsAuth: true },
    routes: [
        { path: '/', redirect: '/teams' },
        //{ path: '/teams', component: TeamsList, alias: '/' }, // '/' route e gele '/teams' e redirect hobe
        {
            path: '/teams',
            name: 'teams',
            components: {
                default: TeamsList,
                footer: TeamsFooter,
            },
            children: [{
                name: 'team-members',
                path: ':teamId',
                component: TeamMembers,
                props: true
            }, ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter,
            },

        },

        {
            path: '/:notFound(.*)',
            component: NotFound
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { top: 0, left: 0 };
    }
});

router.beforeEach((to, from, next) => {
    console.log('From Global Before Each: ', to, from);

    if (to.meta.needsAuth) {
        //some check Or conditions
        next();
    } else {
        next();
    }
});


export default router;
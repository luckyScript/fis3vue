/**
 * @file router config
 */
import App from '../App.vue';
import One from '../page/One.vue';
import Two from '../page/Two.vue';

export default function configRouter(router) {
    router.map({
        '/': {
            component: App,
            subRoutes: {
                '/one': {
                    component: One
                },
                '/two': {
                    component: Two
                }
            }
        }
    });
    router.redirect({
        '/': '/one'
    });
}
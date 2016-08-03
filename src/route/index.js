import App from '../component/App.vue';
import Index from '../component/Index.vue';
import NotFound from '../component/NotFound.vue'

export default function configRouter (router) {
    router.map({
        '/': {
            component: App,
            title: '首页',
            subRoutes: {
                '/index': {
                    component: Index
                }
            }
        },
        '*': {
            component: NotFound
        }
    });
    router.redirect({
        '/': '/index',
    });
}

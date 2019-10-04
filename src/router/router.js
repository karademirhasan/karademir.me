
import Works from '../components/pages/Works.vue';
import Education from '../components/pages/Education.vue';
import Experience from '../components/pages/Experience.vue';

export default {
    routes: [
        {
            path: '/',
            component: Experience
        },
        {
            path: '/works', 
            component: Works
        },
        {
            path: '/education',
            component: Education
        },
        {
            path: '/experience',
            component: Experience
        },
    ],
    mode: 'history',
}
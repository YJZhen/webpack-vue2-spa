
import Home from './views/home.vue';
import Login from './views/login.vue';
import About from './views/about.vue';

// const Home = resolve => {
//     require.ensure(['./views/home.vue'], () => {
//         resolve(require('./views/home.vue'));
//     });
// };
// const Login = resolve => {
//     require.ensure(['./views/login.vue'], () => {
//         resolve(require('./views/login.vue'));
//     });
// };
// const About = resolve => {
//     require.ensure(['./views/about.vue'], () => {
//         resolve(require('./views/about.vue'));
//     });
// };

const routers=[
    {
        path:'/',
        component:Home
    },
    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/about',
        name:'about',
        component:About
    }
];

// export default new Router({
//     mode:'history',
//     base:__dirname,
//     routes
// });

export default routers;
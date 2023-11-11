import Home from '~/pages/home';
import Cinema from '~/pages/cinema';
import Fashion from '~/pages/fashion';
import Grooming from '~/pages/grooming';
import LifeStyle from '~/pages/lifestyle';

// dont need login to view
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cinema', component: Cinema },
    { path: '/fashion', component: Fashion },
    { path: '/grooming', component: Grooming },
    { path: '/lifestyle', component: LifeStyle },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

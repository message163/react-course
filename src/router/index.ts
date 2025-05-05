import { createBrowserRouter } from 'react-router';
import Layout from '../layout';
import Home from '../pages/Home';
import About from '../pages/About';
const router = createBrowserRouter([
    {
        path: '/index',
        Component: Layout,
        children: [
            {
                path: 'home',
                Component: Home,
            },
            {
                path: 'about',
                Component: About,
            },
        ],
    },
]);

export default router;

import { createBrowserRouter } from 'react-router';
import Layout from '../layout';
import Home from '../pages/Home';
import About from '../pages/About';
const data = [
    {name:'张三',age:18},
    {name:'李四',age:20},
    {name:'王五',age:22},
]
const sleep = (ms:number) => new Promise(resolve => setTimeout(resolve, ms)); //模拟异步
const router = createBrowserRouter([
    {
        // path: '/index',
        Component: Layout,
        children: [
            {
                path: 'home',
                Component: Home,
                loader: async () => {
                    await sleep(2000); //模拟异步操作
                    //fetch ajax axios swr获取数据
                    return {
                        data,
                        success:true
                    }
                }
            },
            {
                path: 'about',
                Component: About,
            },
        ],
    },
]);

export default router;

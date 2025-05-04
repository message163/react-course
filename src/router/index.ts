import { createBrowserRouter,redirect } from 'react-router';
import Layout from '../layout';
import Home from '../pages/Home';
import About from '../pages/About';
const data = [
    { name: '张三', age: 18 },
    { name: '李四', age: 20 },
    { name: '王五', age: 22 },
]
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms)); //模拟异步
const router = createBrowserRouter([
    {
        path: '/index',
        Component: Layout,
        children: [
            {
                path: 'home',
                Component: Home,
                // loader: async () => {
                //     await sleep(2000); //模拟异步操作
                //     //fetch ajax axios swr获取数据
                //     return {
                //         data,
                //         success:true
                //     }
                // },
                // action: async ({request}) => {
                //     const json = await request.json(); //默认就是通过formData接受数据
                //     console.log(json);
                //     //fetch ajax 掉接口
                //     data.push(json);
                //     await sleep(2000); //模拟异步操作
                //     return {
                //         success:true,
                //         message:'提交成功'
                //     }
                // }
            },
            {
                path: 'about',
                Component: About,
                // loader: async () => {
                //     const userInfo = null
                //     if(!userInfo){
                //         console.log('登录失败');
                //         await sleep(2000);
                //         return redirect('/home',new Response('登录失败',{status:401}));
                //     }else{
                //         console.log('登录成功');
                //     }
                //     return userInfo;
                // }
            },
        ],
    },
]);

export default router;

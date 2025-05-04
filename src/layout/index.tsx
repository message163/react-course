import { Layout as AntdLayout, Button, Tabs } from 'antd';
// import Menu from './Menu';
// import Header from './Header';
import './index.css'
import Content from './Content';
import { NavLink } from 'react-router';
export default function Layout() {
    return <AntdLayout>
         <div className='link-container'>
            <NavLink className='link'  to="/index/home">Home</NavLink>
            <NavLink className='link'  to="/index/about">About</NavLink>
         </div>
         <AntdLayout>
             {/* <Header></Header> */}
             <Content></Content>
         </AntdLayout>
    </AntdLayout>
}

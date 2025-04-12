import { Layout as AntdLayout } from 'antd';
import Menu from './Menu';
import Header from './Header';
import Content from './Content';

export default function Layout() {
    return <AntdLayout>
         <AntdLayout.Sider>
             <Menu />
         </AntdLayout.Sider>
         <AntdLayout>
             <Header></Header>
             <Content></Content>
         </AntdLayout>
    </AntdLayout>
}

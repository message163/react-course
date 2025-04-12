import { Breadcrumb } from 'antd';

export default function Header() {
  return <Breadcrumb 
    items={[
      {
        title: 'Home',
      },
      {
        title: 'List',
      },
      {
        title: 'App',
      },
    ]}
  />;
}
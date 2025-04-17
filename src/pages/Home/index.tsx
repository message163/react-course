import { NavLink } from 'react-router';
import { Card } from 'antd';
export default function Home() {
  return <Card>
    <h1>Home</h1>
    <NavLink to="/about">About</NavLink>
  </Card>;
}



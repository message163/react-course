import { NavLink } from 'react-router';
import { Card } from 'antd';
export default function About() {
  return <Card>
    <h1>About</h1>
    <NavLink replace to="/home">Home</NavLink>
  </Card>;
}



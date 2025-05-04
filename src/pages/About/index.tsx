
import { Card } from 'antd';
import { NavLink } from 'react-router';
export default function About() {
  return <Card>
    <div>
      <h1>About</h1>
      <NavLink to="/index/home">Home</NavLink>
    </div>
  </Card>;
}



import { NavLink } from 'react-router';
import { Card } from 'antd';
import { useSearchParams } from 'react-router';
export default function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('a'),searchParams.get('b'));
  
  return <Card>
    <h1>About</h1>
    <NavLink replace to="/home">Home</NavLink>
  </Card>;
}



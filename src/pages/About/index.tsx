
import { Card } from 'antd';
import { Link,useNavigate } from 'react-router';
export default function About() {
  const navigate = useNavigate();
  return <Card>
    <div>
      <h1>About</h1>
      <Link  to="../home">Home</Link>
    </div>
  </Card>;
}



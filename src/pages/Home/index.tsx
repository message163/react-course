import { Card } from 'antd';
import { useLoaderData } from 'react-router';
export default function Home() {
  const { data } = useLoaderData();
  return <Card>
    <h1>Home</h1>
    {data.map((item: any) => (
      <div key={item.age}>{item.name}</div>
    ))}
  </Card>;
}



import { Card } from 'antd';
import { Form,Input,Button } from 'antd';
export default function Home() {
  const onFinish = (values: any) => {
    
  }
  return <Card>
    <h1>Home</h1>
    <Form onFinish={onFinish}>
      <Form.Item label="名字" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="年龄" name="age">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button  type="primary" htmlType="submit">登录</Button>
      </Form.Item>
    </Form>
  </Card>;
}



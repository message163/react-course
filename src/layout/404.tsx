import { Link } from 'react-router'
export default function NotFound() {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f5f5f5'
        }}>
            <h1 style={{ fontSize: 96, color: '#1890ff', margin: 0 }}>404</h1>
            <p style={{ fontSize: 24, color: '#888', margin: '16px 0 0 0' }}>
                抱歉，您访问的页面不存在
            </p>
            <Link
                to="/"
                style={{
                    marginTop: 32,
                    color: '#1890ff',
                    fontSize: 18,
                    textDecoration: 'underline'
                }}
            >
                返回首页
            </Link>
        </div>
    )
}
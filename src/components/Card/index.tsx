import './index.css'
export default function Card() {
    return <div className="card">
        <header>
            <div>标题111</div>
            <div>副标题</div>
        </header>
        <main>
            内容区域
        </main>
        <footer>
            <button>确认</button>
            <button>取消</button>
        </footer>
    </div>
}
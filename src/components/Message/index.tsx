import ReactDOM from 'react-dom/client'
import './index.css'
//tsx语法
const Message = () => {
    return <div>消息提示</div>
}

interface Item {
    messageContainer: HTMLElement
    root: ReactDOM.Root
}

const queue: Item[] = []
window.onShow = () => {
    const messageContainer = document.createElement('div')
    messageContainer.className = 'message'
    messageContainer.style.top = `${queue.length * 50}px`
    document.body.appendChild(messageContainer)
    //容器关联Message组件
    //把容器注册成根组件
    const root = ReactDOM.createRoot(messageContainer)
    root.render(<Message />)

    queue.push({
        messageContainer,
        root
    })

    setTimeout(() => {
        const item = queue.find(item => item.messageContainer === messageContainer)!
        item.root.unmount()
        document.body.removeChild(item.messageContainer)
        queue.splice(queue.indexOf(item), 1)
    }, 2000)
}


//ts声明扩充 js忽略
declare global {
    interface Window {
        onShow: () => void
    }
}
import './index.css'
import React from 'react'
//1.第一种写法 interface 安装给 props
interface Props {
    title?: string
    children?: React.ReactNode
    callback?: (params:string) => void
}
//2.React.FC function component

//默认值
//1.解构 {title='默认标题'}
//2.默认值 声明一个默认对象

const defaultProps:Partial<Props> = {
    title: '默认标题'
}

const Card:React.FC<Props> = (props) => {
    //---------------------------------
    //--接收方
    window.addEventListener('on-card', e => {
        console.log('我是B收到了',e.params)
    })
    //-----------------------------------
    const {title} = {...defaultProps, ...props}
    return <div className="card">
    <header>
        <div>{title}</div>
        <div>副标题</div>
    </header>
    <main>
        {props.children}
    </main>
    <footer>
        <button>确认</button>
        <button>取消</button>
    </footer>
</div>
}


export default Card


// export default function Card(props: Props) {
//     console.log(props)
   
// }
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
    //-----------------------------------
     //1.创建自定义事件
     const e = new Event('on-card') //随便写不要跟原生事件重复就可以了
     const clickTap = () => {
        e.params = {name:'我是参数'}
        window.dispatchEvent(e)
     }
    //------------------------------------
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
        <button onClick={clickTap}>确认</button>
        <button>取消</button>
    </footer>
</div>
}


export default Card

declare global {
    interface Event {
       params: {name:string}
    }
}


// export default function Card(props: Props) {
//     console.log(props)
   
// }
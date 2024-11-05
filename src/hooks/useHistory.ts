import { useSyncExternalStore } from "react"
//histoty api去实现 push,replace 跳转页面 监听history 变化
export const useHistory = () => {

    const subscribe = (callback: () => void) => {
         //订阅浏览器api 监听history 变化
         //vue 里面的路由 三种模式 一种ssr用的 两种web history hash
         //history 底层popstate
         //hash 底层hashchange
         window.addEventListener('popstate',callback)
         window.addEventListener('hashchange',callback)
         return () => {
            //取消订阅
            window.removeEventListener('popstate',callback)
            window.removeEventListener('hashchange',callback)
         }
         //popstate 只能监听浏览器前进后退按钮无法监听 pushState replaceState
    }

    const getSnapshot = () => {
     return window.location.href
    }

    const url = useSyncExternalStore(subscribe,getSnapshot)

    const push = (url:string) => {
        window.history.pushState({},'',url)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    const replace = (url:string) => {
        window.history.replaceState({},'',url)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    return [url,push,replace] as const //元组类型

}

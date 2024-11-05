import React, { useState, useTransition } from 'react'
import { Input, List } from 'antd'
interface Item {
   id: number
   name: string
   address: string
}
export const App = () => {
   const [val, setVal] = useState('')
   const [list, setList] = useState<Item[]>([])
   const [isPending, startTransition] = useTransition()
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setVal(value)
      fetch('/api/list?keyWord=' + value).then(res => res.json()).then(res => {
         startTransition(() => {
            setList(res.list)
         })
      })
   }
   return (
      <div>
         <Input value={val} onChange={handleChange} />
         {isPending && <div>加载中</div>}
         <List renderItem={(item) => <List.Item>
            <List.Item.Meta title={item.name} description={item.address} />
         </List.Item>} dataSource={list}>

         </List>
      </div>
   )
}

export default App
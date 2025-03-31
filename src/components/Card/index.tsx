import { use } from 'react'
import './index.css'
interface Data {
   name: string
   age: number
   address: string
   avatar: string
}

const sleep = (ms: number) => {
   return new Promise((resolve) => {
      setTimeout(() => {
      resolve('')
      }, ms)
   })
}

const getData = async () => {
  await sleep(2000) //等待两秒延迟
  return await fetch('/data.json').then((res) => res.json()) as { data: Data }
}

const dataPromise = getData()


const Card: React.FC = () => {
   const { data } = use(dataPromise);
   return <div className="card">
      <header className="card-header">
         <div className="card-name">{data.name}</div>
         <div className="card-age">{data.age}</div>
      </header>
      <section className="card-content">
         <div className="card-address">{data.address}</div>
         <div className="card-avatar">
            <img width={50} height={50} src={data.avatar} alt="" />
         </div>
      </section>
   </div>;
};

export default Card;
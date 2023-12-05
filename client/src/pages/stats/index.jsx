import { useState } from "react"
 import { Tabs } from 'antd';

 import './index.css'
 import { Chart } from "./Chart";
 const tabs = ['Day', 'Week', 'Month', 'Year']
 const Day = (item) => {
     return (<div style={{maxHeight:'70vh', display:'flex', justifyContent:'center'}}>
         <Chart item={item}/>
     </div>)
 }
 export default function Stats() {
     const [data, setData] = useState()
     return (
         <div className="stats">
             <h1>Statistics</h1>
             <Tabs
                 defaultActiveKey="1"
                 centered

                 items={tabs.map((item, index) => {
                     return {
                         label: item,
                         key: item+index,
                         children:Day(item),
                     };
                 })}
             />
         </div>
     )
 }
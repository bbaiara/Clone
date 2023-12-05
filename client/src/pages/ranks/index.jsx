import React, { useEffect, useState } from 'react';
 import InfiniteScroll from 'react-infinite-scroll-component';
 import { Avatar, Divider, List, Skeleton } from 'antd';
 import './index.css'
 let curr = 100
 function getRandomInt(max) {
     // return Math.floor(Math.random() * max);
     return curr>0 ? --curr : 0
   }
 export default function Ranks(){
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState([]);
   const loadMoreData = () => {
     if (loading) {
       return;
     }
     setLoading(true);
     fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
       .then((res) => res.json())
       .then((body) => {
         setData([...data, ...body.results]);
         setLoading(false);
       })
       .catch(() => {
         setLoading(false);
       });
   };
   useEffect(() => {
     loadMoreData();
   }, []);
   return (
     <div className='ranks'>
         <h1>Top ranking players</h1>
         <div
         id="scrollableDiv"
         style={{
             overflow: 'auto',
             padding: '0 16px',
             // background:'var(--disabled)'
         }}
         >
         <InfiniteScroll
             dataLength={data.length}
             next={loadMoreData}
             hasMore={data.length < 50}
             loader={
             <Skeleton
                 avatar
                 paragraph={{
                 rows: 1,
                 }}
                 active
             />
             }
             endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
             scrollableTarget="scrollableDiv"
         >
             <List
             dataSource={data}
             renderItem={(item) => (
                 <List.Item key={item.email}>
                 <List.Item.Meta
                     avatar={<Avatar src={item.picture.large} />}
                     title={<a href="https://ant.design">{item.name.last}</a>}
                     description={item.email}
                 />
                 <div>{getRandomInt(100)} hours</div>
                 </List.Item>
             )}
             />
         </InfiniteScroll>
         </div>
     </div>
   );
 };
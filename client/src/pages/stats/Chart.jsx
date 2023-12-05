import React from 'react';
 import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Filler,
   Legend,
 } from 'chart.js';
 import { Line } from 'react-chartjs-2';


 ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Filler,
   Legend
 );

 export const options = {
   responsive: true,
   plugins: {
     legend: {
       position: 'top',
     },
     title: {
       display: true,
     },
   },
 };

 const w = ['1', '2', '3', '4', '5', '6'];
 const d = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
 const m = ['January', 'February', 'March', 'April', 'May', 'June'];
 const y = ['2020', '2021', '2022', '2023',];

 export function Chart({item='day'}) {
     const fake = {
         'day':[11,12, 10, 3, 4 ,5, 7],
         'week':[4,5, 10, 3,2 ,1],
         'month':[1,2, 0, 3, 4 ,5],
         'year':[40,33, 55, 50],
     }
     const fakeLabel = {
         day:d,
         week:w,
         month:m,
         year:y
     }
     const data = {
         labels:fakeLabel[item.toLowerCase()],
         datasets: [
           {
             fill: true,
             label: 'Dataset 2',
             data: fake[item.toLowerCase()],
             borderColor: 'rgb(53, 162, 235)',
             backgroundColor: 'rgba(53, 162, 235, 0.5)',
           },
         ],
       };

   return <Line options={options} data={data} />;
 }
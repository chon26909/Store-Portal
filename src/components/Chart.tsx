import React from 'react';

const Chart = () => {
    return <div>Chart</div>;
};

export default Chart;

// import React from 'react';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// import annotationPlugin from 'chartjs-plugin-annotation';
// import zoomPlugin from 'chartjs-plugin-zoom';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, annotationPlugin, zoomPlugin);

// const dataaa = [
//     {
//         id: 0,
//         name: '1'
//     },
//     {
//         id: 1,
//         name: '1'
//     },
//     {
//         id: 2,
//         name: '1'
//     },
//     {
//         id: 3,
//         name: '1'
//     },
//     {
//         id: 4,
//         name: '-5'
//     },
//     {
//         id: 5,
//         name: '9'
//     },
//     {
//         id: 6,
//         name: '9'
//     },
//     {
//         id: 7,
//         name: '-3'
//     },
//     {
//         id: 8,
//         name: '-3'
//     }
// ];

// const result = dataaa.reduce((buffer: any, item: any, index) => {
//     if (buffer[item.name]) {
//         buffer[item.name].xMax += 1;
//     } else {
//         buffer[item.name] = {
//             type: 'box',
//             xMin: index,
//             xMax: index,
//             yMin: 0,
//             yMax: 100,
//             backgroundColor: 'rgba(255, 99, 132, 0.25)'
//         };
//     }
//     return buffer;
// }, {});

// console.log('result', result);

// export const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'top' as const
//         },
//         title: {
//             display: true,
//             text: 'Chart.js Line Chart'
//         },
//         zoom: {
//             zoom: {
//                 wheel: {
//                     enabled: true
//                 },
//                 // drag:{
//                 //   enabled:true
//                 // },
//                 mode: 'x',
//                 speed: 100
//             },
//             pan: {
//                 enabled: true,
//                 mode: 'x',
//                 speed: 0.5
//             }
//         },
//         annotation: {
//             annotations: result
//         }
//     }
// };

// let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// labels = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     ...labels,
//     ...labels,
//     ...labels,
//     ...labels,
//     ...labels,
//     ...labels,
//     ...labels,
//     ...labels
// ];

// export const data = {
//     labels,
//     datasets: [
//         {
//             label: 'My First Dataset',
//             data: [
//                 65, 59, 80, 81, 56, 55, 99, 65, 59, 80, 81, 56, 55, 99, 65, 59, 80, 81, 56, 55, 99, 65, 59, 80, 81, 56, 55, 99, 65, 59, 80, 81, 56,
//                 65, 59, 80, 81, 56, 55, 99, 65, 59, 80, 81, 56, 55, 99, 65, 59, 80, 81, 56, 55, 99, 65, 59, 80, 81, 56, 55, 99, 55, 99, 65, 59, 80,
//                 81, 56, 55, 99
//             ],
//             fill: false,
//             borderColor: 'rgb(75, 192, 192)',
//             tension: 0.1
//         }
//     ]
// };

// export default function Chart() {
//     return (
//         <div>
//             <h1>Example react-chartjs-2 Chart with the annotation plugin</h1>
//             <Line options={options} data={data} />;
//         </div>
//     );
// }

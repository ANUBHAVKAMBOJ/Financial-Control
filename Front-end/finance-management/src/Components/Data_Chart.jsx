import React from 'react';
import { Bar } from "react-chartjs-2";
import {Chart as chartjs} from 'chart.js/auto'

function Data_Chart(props) {

    let data = {
        labels: props.x_data,
        datasets: [{
            label: props.heading,
            data: props.y_data,
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgb(75, 192, 192)'
            ],
            borderWidth: 2
        }]   
    };

    let options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };


  return (
    <div style={{"width": "580px", "height": "325px", "background": "white"}} className='shadow-xl rounded-xl p-5'>
        <Bar data={data} options={options}/>
    </div>
  )
}

export default Data_Chart
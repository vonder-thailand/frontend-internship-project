import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { apiResult } from '../../apis/result.api'

interface Chartprop {
    options: any;
    series?: any
}

const Charts = () => {
    const [chartValue, setchartValue] = useState<Chartprop>({
        series:[
            {
               name: "Skill",
               data: [80, 12, 23 , 40 , 60 , 10, 50 ,20]
            }
         ],
         options :{
                chart: {
                  height: 350,
                  type: "radar",
                  dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                  }
                },
                title: {
                  text: "ผลลัพธ์ของคุณ"
                },
                stroke: {
                  width: 2
                },
                fill: {
                  opacity: 0.1
                },
               markers: {
                  size: 0
                },
                xaxis: {
                  categories: [ "A" ,"B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ]
                }
        }           
    });

    useEffect(() => {
        console.log(chartValue.options)
        console.log(chartValue.series)
    }, [])

    return (
        <>
        <div>
            <Chart
            options = { chartValue.options } 
            series = { chartValue.series }
            type ="radar"
            />

        </div>


        </>
    );
};

export default Charts
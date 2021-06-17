import styled from 'styled-components';
import { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts'
import { apiResult } from '../../apis/result.api'

interface Chartprop {
    option?: any;
    series?: any
}

const Chart = () => {
    const [chartValue, setchartValue] = useState<Chartprop>({
        series:[
            {
               name: "Skill",
               data: [80, 12, 23 , 40 , 60 , 10, 50 ,20]
            }
         ],
        option :{
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
                  text: "8 Skill"
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
        console.log(chartValue.option)
        console.log(chartValue.series)
    }, [])

    return (
        <>
        <div>
            {/* <ApexCharts 
            option= { chartValue.option } 
            series= { chartValue.series }
            /> */}

        </div>


        </>
    );
};

export default Chart
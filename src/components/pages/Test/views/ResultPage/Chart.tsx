import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
// import { apiResult } from '../../apis/result.api'
import MockResultData from '../../mocks/result.json'

interface Chartprop {
    options: any;
    series?: any
}

const Charts = () => {
    const MockScore = require('../../mocks/result.json')

    const [chartValue, setchartValue] = useState<Chartprop>({
        series:[
            {
               name: "Skill",
               data: MockScore.result.score
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
                    size: 5,
                    hover: {
                      size: 10
                    }
                  },
                xaxis: {
                  categories: MockScore.result.skill
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
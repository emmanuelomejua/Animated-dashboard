import { Link } from 'react-router-dom';
import './chartbox.scss';
import { Line, LineChart, Tooltip } from 'recharts'
import { chartProps } from '../../types/types';
import React from 'react';


const ChartBox:React.FC<chartProps> = (props) => {
  return (
    <div className='chartbox'>
      <section className='boxInfo'>
        <div className="title">
            <img src={props.icon} alt="" />
            <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to='/' style={{color: props.color}}>view all</Link>
      </section>

      <section className='chartInfo'>
        <div className="charts">
            <LineChart width={100} height={100} data={props.chartData}>
                <Tooltip
                    contentStyle={{background: 'transparent', border: 'none'}}
                    labelStyle={{display: 'none'}}
                    position={{x:10, y: 60}}
                />
                <Line
                    type="monotone"
                    dataKey={props.dataKey}
                    stroke={props.color}
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </div>
        <div className="texts">
            <span className="percentage" style={{color: props.percentage < 0 ? 'tomato': 'lightgreen'}}>{props.percentage}%</span>
            <span className="duration">this month</span>
        </div>
      </section>
    </div>
  )
}

export default ChartBox

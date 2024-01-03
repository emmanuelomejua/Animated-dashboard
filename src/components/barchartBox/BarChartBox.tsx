import { Bar, BarChart, Tooltip } from 'recharts'
import './barchartbox.scss'
import { barchartBoxProps } from '../../types/types'

const BarChartBox = (props: barchartBoxProps) => {
  return (
    <div className='barchartbox'>
      <h2>{props.title}</h2>
        <BarChart width={160} height={140} data={props.chartData}>
          <Bar
            dataKey={props.dataKey} fill={props.color}
            
          />
          <Tooltip
             contentStyle={{background: '#2a3447', borderRadius: '5px'}}
             labelStyle={{display: 'none'}}
             cursor={{fill: 'none'}}
          />
        </BarChart>
    </div>
  )
}

export default BarChartBox

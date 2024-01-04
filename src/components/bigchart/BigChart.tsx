import { AreaChart, CartesianGrid, ResponsiveContainer, XAxis } from 'recharts'
import './bigchart.scss'

const BigChartBox = () => {
  return (
    <div className='bigchart'>
      <h2>Revenue Analytics</h2>

      <div className="chart">
        <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
            width={500}
            height={400}
            // data=''
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
            }}
            >
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis/>
            </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BigChartBox

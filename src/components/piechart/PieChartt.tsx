import { Cell, Pie, PieChart, Tooltip } from 'recharts'
import './piechart.scss'

const data = [
    {
        name: 'Mobile',
        value: 400,
        color: '#0088FE'
    },
    {
        name: 'Desktop',
        value: 300,
        color: '#00C49F'
    },
    {
        name: 'Laptop',
        value: 200,
        color: '#FFBB28'
    },
    {
        name: 'Tablet',
        value: 200,
        color: '#FF8042'
    },
]

const PieChartBox = () => {
  return (
    <div className='piechartbox'>
      <h2>Leads by source</h2>

      <div className="chart">
            <PieChart width={300} height={300}>
                <Tooltip
                contentStyle={{background:'#888', borderRadius: '5px'}}
                />
                <Pie
                data={data}
                cx={120}
                cy={200}
                innerRadius={'50%'}
                outerRadius={'65%'}
                paddingAngle={5}
                fill='#8884d8'
                dataKey='value'
                >
                {
                    data.map((item) => (
                        <Cell 
                        key={item.name}
                        fill={item.color}
                        />
                    ))
                }
                </Pie>
            </PieChart>
      </div>

      <div className="options">
        {
            data.map((item) => ((
            <div className="option" key={item.name}>
                <div className="title">
                    <div className='dot' style={{background: item.color}}/>
                    <span>{item.name}</span>
                </div>
                <span>{item.value}</span>
            </div>

            )))
        }
      </div>
    </div>
  )
}

export default PieChartBox

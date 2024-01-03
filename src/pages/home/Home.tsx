import { chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion } from '../../data'
import ChartBox from '../../components/chartbox/ChartBox'
import Topbox from '../../components/topbox/Topbox'
import './home.scss'

const Home:React.FC = () => {
  return (
    <main className='home'>
      <div className="box box1">
        <Topbox/>
      </div>
      <div className="box box2">
        <ChartBox
          color={chartBoxUser.color}
          icon={chartBoxUser.icon}
          title={chartBoxUser.title}
          dataKey={chartBoxUser.dataKey}
          number={chartBoxUser.number}
          percentage={chartBoxUser.percentage}
          chartData={chartBoxUser.chartData}
      />
      </div>

      <div className="box box3">
        <ChartBox 
            color={chartBoxProduct.color}
            icon={chartBoxProduct.icon}
            title={chartBoxProduct.title}
            dataKey={chartBoxProduct.dataKey}
            number={chartBoxProduct.number}
            percentage={chartBoxProduct.percentage}
            chartData={chartBoxProduct.chartData}
        />
        </div>
        <div className="box box4">Box4</div>
      <div className="box box5">
        <ChartBox 
          color={chartBoxRevenue.color}
          icon={chartBoxRevenue.icon}
          title={chartBoxRevenue.title}
          dataKey={chartBoxRevenue.dataKey}
          number={chartBoxRevenue.number}
          percentage={chartBoxRevenue.percentage}
          chartData={chartBoxRevenue.chartData}
        />
        </div>
      <div className="box box6">
        <ChartBox 
          color={chartBoxConversion.color}
          icon={chartBoxConversion.icon}
          title={chartBoxConversion.title}
          dataKey={chartBoxConversion.dataKey}
          number={chartBoxConversion.number}
          percentage={chartBoxConversion.percentage}
          chartData={chartBoxConversion.chartData}
      /></div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
      <div className="box box9">Box9</div>
    </main>
  )
}

export default Home

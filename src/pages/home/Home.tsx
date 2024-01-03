import { chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion, barChartBoxRevenue, barChartBoxVisit } from '../../data'
import ChartBox from '../../components/chartbox/ChartBox'
import Topbox from '../../components/topbox/Topbox'
import './home.scss'
import BarChartBox from '../../components/barchartBox/BarChartBox'

const Home:React.FC = () => {
  return (
    <main className='home'>
      <div className="box box1">
        <Topbox/>
      </div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>

      <div className="box box3">
        <ChartBox 
            {...chartBoxProduct}
        />
        </div>
        <div className="box box4">Box4</div>
      <div className="box box5">
        <ChartBox 
          {...chartBoxRevenue}
        />
        </div>
      <div className="box box6">
        <ChartBox 
          {...chartBoxConversion}
      /></div>
      <div className="box box7">Box7</div>
      <div className="box box8"><BarChartBox {...barChartBoxRevenue}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxVisit}/></div>
    </main>
  )
}

export default Home

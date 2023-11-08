import './topbox.scss'
import { topDealUsers } from '../../data'

const Topbox = () => {
  return (
    <section className='topbox'>
      <h2>Top Deals</h2>

        <section className='list'>
        {
            topDealUsers.map((users) => (
                <section className='listItem' key={users.id}>
                    <div className="user">
                        <img src={users.img} alt="" className="" />
                        <div className="userTexts">
                            <span className="username">{users.username}</span>
                            <span className="email">{users.email}</span>
                        </div>
                    </div>

                    <span className="amount">{users.amount}</span>
                </section>
            ))
        }
        </section>
    </section>
  )
}

export default Topbox

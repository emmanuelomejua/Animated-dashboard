import { Link } from 'react-router-dom'
import './menu.scss'
import { menu } from '../../data'

const Menu = () => {
  return (
    <section className='menu'>
        {
          menu.map((item) => (
            <section className='item' key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItem.map((litem) => (
            <Link to={litem.url} className='listItem' key={litem.id}>
              <img src={litem.icon} alt="" className="icon" />
              <span className="listItemTitle">{litem.title}</span>
            </Link>
            ))}
              
          </section>
            ))
        }

    </section>
  )
}

export default Menu

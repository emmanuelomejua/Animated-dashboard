import './navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <section className='logo'>
        <img src='logo.jpg' alt='' height={24}/>
        <span>Admin</span>
      </section>

      <section className='icons'>
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />

        <div className="notification">
          <img src="/notifications.svg" alt="" className="icon" />
          <span>3</span>
        </div>

        <div className="user">
          <img src="/admin.jpg" alt="" className="img" />
          <span>Chi</span>

        </div>
        <img src="/setting.svg" alt="" className="icon" />
      </section>
    </nav>
  )
}

export default Navbar

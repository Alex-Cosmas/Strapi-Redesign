import Header from '../src/modules/shared/header'

const Layout = ({ children }) => {
  return (
    <div className='content'>
      <Header />
      {children}
    </div>
  )
}

export default Layout

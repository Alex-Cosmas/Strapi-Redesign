import Header from '../src/components/header'

const Layout = ({ children }) => {
  return (
    <div className='content'>
      <Header />
      {children}
    </div>
  )
}

export default Layout

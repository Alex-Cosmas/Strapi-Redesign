import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Nav from '../src/components/header'
import DefaultLayoutWrapper from '../layouts/standard'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Nav />
      <DefaultLayoutWrapper>{children} </DefaultLayoutWrapper>
    </div>
  )
}

export default MyApp

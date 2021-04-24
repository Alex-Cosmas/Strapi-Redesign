import SignIn from './auth/signin'
import Login from '../layouts/login'

const Home = () => {
  return (
    <div className=' text-default-primary'>
      <SignIn />
    </div>
  )
}
Home.Layout = Login

export default Home

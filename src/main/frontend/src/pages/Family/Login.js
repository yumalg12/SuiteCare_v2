import LoginForm from '../../component/Login/LoginForm'
import Header from '../../component/Family/Header/Header'

function Login() {
  return (<div className="Login">
  <Header/>
  <LoginForm type='family'/>
  </div>)
}

export default Login;
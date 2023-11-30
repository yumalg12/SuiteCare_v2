import LoginForm from '../../component/Login/LoginForm'
import Header from '../../component/Mate/Header/Header'

function Login() {
  return (<div className="Login">
  <Header/>
  <LoginForm type='mate'/>
  </div>)
}

export default Login;
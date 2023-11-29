import Form from '../../component/Login/Form'
import Header from '../../component/Family/Header/Header'
import FamilyDropdown from '../../component/Family/Header/Dropdown'


function Login() {
  return (<div className="Login">
  <Header/>
  <FamilyDropdown/>
  <Form/>

  </div>)
}



export default Login;
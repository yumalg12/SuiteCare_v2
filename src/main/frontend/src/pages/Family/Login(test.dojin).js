import axios from "axios";
import {useState, useEffect} from "react";

function Login() {
    const [message, setMessage] = useState();

    useEffect(() => {
        axios.post("/api/v1/login", { suite_family_id : "Kim", password : "Kim" }) // 이 자리에 로그인 세션 값이 들어가면 될 듯?
                .then((response) => {
                    if(response.status === 200){
                        console.log(response);
                        setMessage(response.data.suite_family_id);
                    }
                })
                .catch((error) => console.log(error));
    }, [])

    return (
        <div className="Login">
            패밀리 로그인 페이지를 띄워요
            <p> {message} 님 환영합니다. </p>
        </div>
    )

}

export default Login;
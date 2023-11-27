import React, { useState } from 'react';
import './Form.css'
import axios from 'axios';

function Login(props) {

    // react hook에서 state 사용
    const [ID, setID] = useState('');
    const [Password, setPassword] = useState('');

    const onIDHandler = (event) => {
        setID(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        // 버튼만 누르면 리로드 되는것을 막아줌
        event.preventDefault();
        console.log('ID : ', ID);
        console.log('Password : ', Password);

        let body = {
            suite_family_id: ID,
            password: Password,
        }

        axios.post("/api/v1/login", body)
            .then((response) => {
                console.log(response.data.suite_family_id);
            }).catch((error) => {
                console.log(error);
            });

    };

    return (
        <div style={{ display: 'flex' , justifyContent: 'center' , alignItems: 'center' , width: '100%' , height: '100vh' , }}>
            <div class="login-box">
                <h2> Login </h2>
                <br /><br />
                <form style={{ display: 'flex' , flexDirection: 'column' }} onSubmit={onSubmitHandler}>
                    <div class="user-box">
                        <input type="text" placeholder=' 아이디' value={ID} onChange={onIDHandler} />

                    </div>
                    <div class="user-box">
                        <input type="password" placeholder=' 비밀번호' value={Password} onChange={onPasswordHandler} />

                    </div>
                    <button className='button button_1' type="submit">로그인</button>
                    <button className='button button_2' type="submit">회원가입</button>

                </form>
            </div>
        </div>
    );
}

export default Login;
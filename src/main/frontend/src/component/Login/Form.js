import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';

const Form = ({ type }) => {
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
        console.log('ID', ID);
        console.log('Password', Password);
        /*
    let body = {
        ID: ID,
        password: Password,
    }
        dispatch(loginUser(body));
*/
    };

    const navigator = useNavigate();

    const goToSignUp = () => {
        navigator(`/${type}/signup`);
    };

    return (
        <div className="Form">
            <div class="login-box">
                <h1> 로그인 </h1>
                <br />
                <br />
                <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
                    <div class="user-box">
                        <input type="text" placeholder=" 아이디" value={ID} onChange={onIDHandler} />
                    </div>
                    <div class="user-box">
                        <input type="password" placeholder=" 비밀번호" value={Password} onChange={onPasswordHandler} />
                    </div>
                    <button className="button button_1" type="submit">
                        로그인
                    </button>
                    <button className="button button_2" onClick={goToSignUp}>
                        회원가입
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;

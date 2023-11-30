import Header from '../../component/Mate/Header/Header';
import SignUpForm from '../../component/SignUp/SignUpForm';

const SignUp = () => {
    return (
        <div className="SignUp">
            <Header />
            <SignUpForm type="mate" />
        </div>
    );
};

export default SignUp;

import Header from '../../component/Family/Header/Header';
import SignUpForm from '../../component/SignUp/SignUpForm';

const SignUp = () => {
    return (
        <div className="SignUp">
            <Header />
            <SignUpForm type="family" />
        </div>
    );
};

export default SignUp;

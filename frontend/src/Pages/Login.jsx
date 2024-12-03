import login from '../assets/login.jpg';
import './Login.css';
import SignupForm from '../Components/SignupForm.jsx';


const Login = () => (
  <main>
    <div className="general-container card-container">
      <div className="card">
        <div className="card-image">
          <div className="card-image-container">
            <img alt="" src={login}></img>
          </div>
        </div>
        <div className="card-form">
          <SignupForm />
        </div>
      </div>
    </div>
  </main>
);

export default Login;
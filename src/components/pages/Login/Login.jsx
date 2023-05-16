import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            
            console.log(user);
            navigate(from, {replace: true})

            

        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl text-center font-bold">Login now!</h1>

                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" name='password' className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn bg-[#FF3811] border-none' value="LOGIN" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>New to Car Doctors <Link to='/signUp' className='text-[#FF3811]'>Sign Up</Link> </p>
                    <SocialLogin></SocialLogin>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;
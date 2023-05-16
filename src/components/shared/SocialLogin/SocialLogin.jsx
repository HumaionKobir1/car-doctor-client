import { useContext } from 'react';
import img from '../../../assets/images/login/google.png'
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
            navigate(from, {replace: true})
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='flex gap-5 justify-center items-center mt-7'>
            
            <button onClick={handleGoogleSignIn}> <img className='w-5 h-5' src={img} alt="" /> </button>
            <button> <FaGithub className='w-5 h-5'></FaGithub> </button>
        </div>
    );
};

export default SocialLogin;
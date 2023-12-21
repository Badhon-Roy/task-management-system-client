import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import swal from "sweetalert";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const [errorMassage, setErrorMassage] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const { googleSignIn, signIn } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : '/')
                swal("Log in", "successful", "success")
                e.target.reset();
            })
            .catch(() => {
                setErrorMassage('something is wrong.Please try again?');
            })


    }
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : '/')
                swal("Log in", "successful", "success")
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="bg-gradient-to-r from-[#5d5ced] to-[#110242]">
        <div className="py-12 md:py-24 max-w-[1300px] mx-auto">
            <div>
                <h1 className="md:text-5xl text-3xl font-bold text-center mb-8 text-white">Login now!</h1>
            </div>
            <div className="md:flex justify-between items-center lg:px-16 md:px-8">
                <div className="lg:w-2/5 md:w-3/4 mx-auto px-4">
                    <div className="card shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl">Email</span>
                                    </label>
                                    <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="text-xl mt-2">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input type={`${showPassword ? 'text' : 'password'}`} name="password" placeholder="password" className="input input-bordered w-full" required />

                                        <p className="absolute right-5 top-4 text-xl" onClick={handleShowPassword}>
                                            {
                                                showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                            }
                                        </p>
                                    </div>


                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-blue-500 hover:bg-blue-600 text-xl text-white">Login</button>
                                </div>
                            </form>
                            {
                                errorMassage && <p className="text-red-500">{errorMassage}</p>
                            }
                            <button onClick={handleGoogleLogin} className="border-2 font-bold hover:bg-blue-300 w-[170px] text-xl flex items-center gap-3 p-1 rounded-lg">
                                <img className="w-8" src="https://www.pngall.com/wp-content/uploads/13/Google-Logo-PNG-Image-180x180.png" alt="" />
                                Google
                            </button>


                            <p>Do not have an account? <Link to="/register"> <span className="text-blue-600 font-bold cursor-pointer text-[18px]">Register</span></Link> </p>
                        </div>
                    </div>
                </div>
                <div className="md:block hidden">
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    console.log(from);

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((res) => {
                const result = res.user;
                axios
                    .post("http://localhost:3000/jwt", email, {
                        withCredentials: true,
                    })
                    .then((res) => {
                        if(res.data){
                            navigate(from, { replace: true });
                        }
                    });
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content lg:flex-row flex-col">
                <div className="w-1/2 mr-8">
                    <img src={logo} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">
                            Login
                        </h1>
                        <form onSubmit={handleForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </form>
                        <p className="font-semibold">
                            New to this site?{" "}
                            <Link to="/signup" className="text-orange-600 ">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

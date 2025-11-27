import './Login.css';
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { login } from "../../Service/AuthService.js";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext.jsx";

const Login = () => {
    const { setAuthData } = useContext(AppContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await login(data);
            if (response.status === 200) {
                toast.success("Login successful");
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("role", response.data.role);
                setAuthData(response.data.token, response.data.role);
                navigate("/dashboard");
            }
        } catch (error) {
            console.error(error);
            toast.error("Email/Password Invalid");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-background">
            <h1 className="site-title animate-title">SkyLedgerX</h1>

            <div className="glass-card animate-pop">
                <h2 className="login-title">Welcome Back</h2>
                <p className="subtitle">Login to access your dashboard</p>

                <form onSubmit={onSubmitHandler}>
                    <div className="input-box">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="yourname@example.com"
                            value={data.email}
                            onChange={onChangeHandler}
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="***********"
                            value={data.password}
                            onChange={onChangeHandler}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-login" disabled={loading}>
                        {loading ? "Authenticating..." : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase.config';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
const Login = () => {
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Logged in successfully!');
            navigate(from, { replace: true });
        } catch (err) {
            console.error(err);
            if (err.code === 'auth/invalid-credential') {
                setError('Invalid email or password.');
            } else {
                setError(err.message);
            }
            toast.error('Login failed: ' + error);
        }
    };

    const handleGoogleLogin = async () => {
        setError('');
        try {
            await signInWithPopup(auth, googleProvider);
            toast.success('Logged in with Google successfully!');
            navigate(from, { replace: true });
        } catch (err) {
            console.error(err);
            setError(err.message);
            toast.error('Google login failed: ' + error);
        }
    };


    if (user) {
        navigate(from, { replace: true });
        return null;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-300">
            <div className="bg-base-100 p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Login</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs italic">{error}</p>}
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full cursor-pointer"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">Or login with:</p>
                    <button
                        onClick={handleGoogleLogin}
                        className="mt-2 w-full flex items-center justify-center gap-2 bg-transparent border border-gray-300 text-black font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-200 cursor-pointer"
                    >
                        <FcGoogle size={20} />
                        Login with Google
                    </button>


                </div>
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-indigo-600 hover:underline">
                            Register here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate(); // Use useNavigate hook

    const handleAuth = async () => {
        if (isSignUp && password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            if (isSignUp) {
                // Sign up new user
                await createUserWithEmailAndPassword(auth, email, password);
                setSuccessMessage('Sign-up successful! You can now sign in.');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setIsSignUp(false);
            } else {
                // Sign in existing user
                await signInWithEmailAndPassword(auth, email, password);
                setSuccessMessage('Sign-in successful!');
                setEmail('');
                setPassword('');

                // Redirect to main page
                navigate('/home'); // Replace '/main' with your actual main page route
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden min-h-screen">
            {/* Removed navigation or header elements here */}
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-normal md:tracking-widest sm:text-6xl animate-text bg-gradient-to-r from-gray-600 via-red-500 to-gray-900 dark:animate-text dark:bg-gradient-to-r dark:from-gray-300 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent">
                        Harmony Hub
                    </h1>
                    <div className="mt-2 flex flex-col items-center">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mb-2 p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mb-2 p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                        />
                        {isSignUp && (
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="mb-2 p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
                            />
                        )}
                        <button
                            onClick={handleAuth}
                            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400"
                        >
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </button>
                        <button
                            onClick={() => setIsSignUp(!isSignUp)}
                            className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100"
                        >
                            {isSignUp ? 'Already have an account? Sign In' : 'No account? Sign Up'}
                        </button>
                        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;

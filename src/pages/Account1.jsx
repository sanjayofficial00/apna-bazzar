import React, { useState } from 'react';

const Account = () => {
  const [task, setTask] = useState('login'); // 'login' or 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === 'login') {
      console.log('Login Email:', email);
      console.log('Login Password:', password);
    } else {
      console.log('Signup Email:', email);
      console.log('Signup Password:', password);
    }
  };

  const renderForm = () => {
    if (task === 'login') {
      return (
        <form autoComplete="on" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              autoComplete="off"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email/Mobile number"
              required
            />
            <label className="block mt-2 text-gray-600">Enter Email/Mobile number</label>
          </div>
          <div className="mb-4 text-gray-600">
            By continuing, you agree to Flipkart's{' '}
            <a className="text-blue-600" target="_blank" href="/pages/terms" rel="noopener noreferrer">
              Terms of Use
            </a>{' '}
            and{' '}
            <a className="text-blue-600" target="_blank" href="/pages/privacypolicy" rel="noopener noreferrer">
              Privacy Policy
            </a>.
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Request OTP
            </button>
          </div>
          <div className="text-center">
            <a
              className="text-blue-600 cursor-pointer"
              onClick={() => setTask('signup')}
            >
              New to Flipkart? Create an account
            </a>
          </div>
        </form>
      );
    } else {
      return (
        <form autoComplete="on" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              autoComplete="off"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email/Mobile number"
              required
            />
            <label className="block mt-2 text-gray-600">Enter Email/Mobile number</label>
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
            />
            <label className="block mt-2 text-gray-600">Enter Password</label>
          </div>
          <div className="mb-4 text-gray-600">
            By continuing, you agree to Flipkart's{' '}
            <a className="text-blue-600" target="_blank" href="/pages/terms" rel="noopener noreferrer">
              Terms of Use
            </a>{' '}
            and{' '}
            <a className="text-blue-600" target="_blank" href="/pages/privacypolicy" rel="noopener noreferrer">
              Privacy Policy
            </a>.
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <a
              className="text-blue-600 cursor-pointer"
              onClick={() => setTask('login')}
            >
              Already have an account? Login
            </a>
          </div>
        </form>
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <div className="flex-1 p-6 bg-gray-100 rounded-lg">
        <span className="text-2xl font-bold">{task === 'login' ? 'Login' : 'Sign Up'}</span>
        <p className="mt-4 text-gray-600">Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="flex-1 p-6">
        {renderForm()}
      </div>
    </div>
  );
};

export default Account;

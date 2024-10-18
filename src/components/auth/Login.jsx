import React, { useState } from 'react';

const Login = () => {
  const [email,setEmail]= useState('')
  const [password, setpassword] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault()
  //  console.log("hellowwwww");
  console.log("email is :",email)
  console.log("password is" ,password) ;
  setEmail('')
  setpassword('')
  }
  return (
    <div className="flex w-full h-screen items-center justify-center bg-gray-900">
      <div className="p-12 rounded-xl bg-gray-800 shadow-xl border border-gray-700">
        <h2 className="text-3xl text-white mb-6 font-bold text-center">Welcome Back</h2>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex flex-col items-center justify-center">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            required
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-600 rounded-full py-3 px-5 text-lg bg-gray-700 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
          />
          <input
          value={password}
          onChange={(e)=>{
          setpassword(e.target.value)
          }}
            required
            type="password"
            placeholder="Password"
            className="w-full border border-gray-600 rounded-full py-3 px-5 text-lg bg-gray-700 text-white placeholder:text-gray-400 mt-4 outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
          />
          <button className="w-full py-3 px-5 mt-6 bg-emerald-600 text-white rounded-full font-semibold transition-transform duration-300 hover:bg-emerald-500 hover:scale-105">
            Log in
          </button>
        </form>
        <div className="text-gray-400 text-sm mt-4 text-center">
          Don't have an account?{' '}
          <a href="#" className="text-emerald-500 hover:text-emerald-400">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';



const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = React.useState("");
    const navigate = useNavigate();
    const {logIn} = UserAuth();

    const handleSignIn = async(e) => {
        e.preventDefault();
        setError('')
        try{
            await logIn(email, password)
            navigate('/account')
            console.log("sccuessfully signed in")
        } catch (err){
            setError(err.message)
            console.log(error)
        }
    }
    return (
        <div className="max-w-[700px] mx-auto my-16 border rounded-xl p-4 ">
            <div>
                <h1 className="text-center text-2xl font-bold py-2"> Sign In</h1>
            </div>
            <form onSubmit={handleSignIn}>
                <div className="flex flex-col py-2">
                    <label className="text-center py-2 font-medium">Email Address</label>
                    <input className="text-center border p-3" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email Address"></input>
                </div>
                <div className="flex flex-col py-2">
                    <label className="py-2 font-medium text-center">Password</label>
                    <input className="text-center border p-3" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Your password"></input>
                </div>
                <button type="submit" className="border rounded-md border-blue-500 bg-blue-600 hover:bg-green-500 w-full p-4 my-2 text-white">Log In</button>
                <p className="py-2 flex justify-end">Don't have an account ?  <Link to="/signup" className="underline"> Register Here</Link> </p>
            </form>
        </div>
    )
}

export default SignIn;
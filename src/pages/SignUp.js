import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext"

function SignUp() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const navigate = useNavigate();

    const { createUser } = UserAuth()

    const handleRegister = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password)
            console.log("Success")
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log(error)

        }
    }

    return (
        <div className="relative top-0 h-[85vh]">
            <div className="max-w-[700px] mx-auto my-20 border rounded-xl p-4 ">
                <div>
                    <h1 className="text-center text-2xl font-bold py-2"> Sign Up Here</h1>
                </div>
                <form onSubmit={handleRegister}>
                    <div className="flex flex-col py-2">
                        <label className="text-center py-2 font-medium">Email Address</label>
                        <input className="text-center border p-3" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email Address"></input>
                    </div>
                    <div className="flex flex-col py-2">
                        <label className="py-2 font-medium text-center">Password</label>
                        <input className="text-center border p-3" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Your password"></input>
                    </div>
                    <button type="submit" className="border rounded-md border-blue-500 bg-blue-600 hover:bg-red-500 w-full p-4 my-2 text-white">Sign Up</button>
                    <p className="py-2 flex justify-end">Already have an account? <Link to="/signin" className="underline">Sign In</Link> </p>
                </form>
            </div>
            <Link to="/"><i className="absolute bottom-0 left-[1.5rem] fa-regular fa-circle-left fa-3x"></i></Link>

        </div>
    );
}

export default SignUp;
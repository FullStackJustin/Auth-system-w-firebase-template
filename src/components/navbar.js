import { Link } from 'react-router-dom';




const Navbar = () => {
    return (
        <div className="relative right-[-5vw] top-[5px] border rounded-lg z-50 h-[8vh] max-w-[90vw] bg-neutral-900 text-white-50">
            <span className="absolute left-3 top-3 text-slate-50"><Link to="/">Auth w Context and Firebase</Link></span>
            <span className="absolute right-3 top-3 text-white"><Link to="/signin" className="border-2 rounded-md border-sky-500 p-[3px] text-white bg-sky-500 hover:bg-sky-600">Login</Link> &nbsp; or &nbsp; <a href="/signup" className="border-2 rounded-md border-sky-500 p-[3px] text-white bg-sky-500 hover:bg-sky-600">Sign Up</a></span>
        </div>
    )
}

export default Navbar;
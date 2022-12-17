import React from 'react';
import { Link } from 'react-router-dom';


function Home() {

    return (
        <div>
            <h1 className="text-center align-middle text-6xl"> Homepage</h1>
            <Link to="/signin">Login or Sign Up</Link>
        </div>
    );
}

export default Home;
import React from 'react';
import Navbar from '../components/navbar';


function Home() {

    return (
        <div className="relative h-[100vh] relative">
            <Navbar/>
            <header className="absolute left-[50vw] top-[50vh] text-bold text-center underline">HomePage</header>
        </div>
    );
}

export default Home;
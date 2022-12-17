import './App.css';
import SignIn from '../src/components/SignIn'
import SignUp from '../src/components/SignUp'
import Home from '../src/components/Home'
import Account from '../src/components/Account'
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <div className="app">
        <header className="text-4xl font-bold text-center underline">Firebase Auth with Context</header>
      </div>
      <AuthContextProvider>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;

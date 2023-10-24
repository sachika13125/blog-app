import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('isLoggedIn'));

  const handleLogin = () => {
    if (username === 'userName' && password === 'password') {
      localStorage.setItem('isLoggedIn', true);
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <div className='login-page'>
        <h1>Log In</h1>
      {isLoggedIn ? (
        <div>
            <p>The user is already logged in.</p>
            <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <div className='login-form'>
            <label>User Name:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default Login;

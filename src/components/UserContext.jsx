// import React, { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export function useUser() {
//   return useContext(UserContext);
// }

// export function UserProvider({ children }) {
//   const [user, setUser] = useState({
//     username: '',
//     isLoggedIn: false,
//   });

//   const login = (username, password) => {
//     if (username === 'userName' && password === 'password') {
//       setUser({ username, isLoggedIn: true });
//       localStorage.setItem('isLoggedIn', true);
//     }
//   };

//   const logout = () => {
//     setUser({ username: '', isLoggedIn: false });
//     localStorage.removeItem('isLoggedIn');
//   };

//   return (
//     <UserContext.Provider value={{ user, login, logout }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

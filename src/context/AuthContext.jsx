import React, { createContext, useContext, useState, useEffect } from 'react';
import { AxiosConfig } from '../axios/AxiosConfig';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('authUser');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (values) => {
    try {

      const response = await AxiosConfig.post('/api/auth/local', {
        identifier: values.email,
        password: values.password,
      });
      const { jwt, user } = response.data;
      setToken(jwt);
      setUser(user);
      localStorage.setItem('authToken', jwt);
      localStorage.setItem('authUser', JSON.stringify(user));
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.response?.data || error.message };
    }
  };

  const register = async (values) => {
    try {
 
      const response = await AxiosConfig.post('/api/auth/local/register', {
        username: values.username, 
        email: values.email,
        password: values.password,
      });
      const { jwt, user } = response.data;
      setToken(jwt);
      setUser(user);
      localStorage.setItem('authToken', jwt);
      localStorage.setItem('authUser', JSON.stringify(user));
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: error.response?.data || error.message };
    }
  };
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { AxiosConfig } from '../axios/AxiosConfig';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     const storedToken = localStorage.getItem('authToken');
//     const storedUser = localStorage.getItem('authUser');
//     if (storedToken && storedUser) {
//       setToken(storedToken);
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const login = async (values) => {
//     try {
//       const response = await AxiosConfig.post('/api/auth/local', {
//         identifier: values.email,
//         password: values.password,
//       });
//       const { jwt, user } = response.data;
//       setToken(jwt);
//       setUser(user);
//       localStorage.setItem('authToken', jwt);
//       localStorage.setItem('authUser', JSON.stringify(user));
//       return { success: true };
//     } catch (error) {
//       console.error('Login error:', error);
//       setErrorMessage("Incorrect email or password!");
//       return { success: false, error: error.response?.data || error.message };
//     }
//   };

//   const register = async (values) => {
//     try {
//       const response = await AxiosConfig.post('/api/auth/local/register', {
//         username: values.username, 
//         email: values.email,
//         password: values.password,
//       });
//       const { jwt, user } = response.data;
//       setToken(jwt);
//       setUser(user);
//       localStorage.setItem('authToken', jwt);
//       localStorage.setItem('authUser', JSON.stringify(user));
//       return { success: true };
//     } catch (error) {
//       console.error('Registration error:', error);
//       setErrorMessage("Registration failed!");
//       return { success: false, error: error.response?.data || error.message };
//     }
//   };

//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('authUser');
//     if (user) {
//       localStorage.removeItem(`cart_${user.id}`);
//       localStorage.removeItem(`wishlist_${user.id}`);
//     } else {
//       localStorage.removeItem('cart');
//       localStorage.removeItem('wishlist');
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, register, logout, errorMessage, setErrorMessage }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
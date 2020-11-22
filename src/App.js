import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes.js';
import axios from 'axios';
import { API } from './constants/constants.js'

export const UsersDataContext = React.createContext();

function App() {
  const routes = useRoutes(true);
  const [ data, setData ] = useState([]);
  useEffect(() => {
    axios.get(API)
      .then((res) => {
        setData(res.data.results);
      })
  }, []);
  return (
    <Router>
      <div className="app">
        <UsersDataContext.Provider value={data}>
        <Header />
        { routes }
        </UsersDataContext.Provider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

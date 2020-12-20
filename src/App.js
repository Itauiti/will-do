import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes.js';
import * as dataJSON from './data/data.json';

export const UsersDataContext = React.createContext();

function App() {
  const routes = useRoutes(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dataJSON.results);
  }, []);
  return (
    <Router>
      <div className="app">
        <UsersDataContext.Provider value={data}>
          <Header />
          {routes}
        </UsersDataContext.Provider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

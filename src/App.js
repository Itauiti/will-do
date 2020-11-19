import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes.js';


function App() {
  const routes = useRoutes();
  return (
    <Router>
      <div className="App">
        <Header />
        { routes }
        <Footer />
      </div>
    </Router>
  );
}

export default App;

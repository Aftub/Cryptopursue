
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Coingeco } from './components/Coingeco';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
          <Route path = "/" exact />
      </Switch>
    </Router>
      <Coingeco />
    </>
  );
}

export default App;

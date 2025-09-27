import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CounterPage from './pages/Counter/CounterPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Welcome!</h1>} />
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

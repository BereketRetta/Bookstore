import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catagories from './components/Catagories';
import './App.css';
import BookList from './components/BookList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route exact path="/catagories" element={<Catagories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

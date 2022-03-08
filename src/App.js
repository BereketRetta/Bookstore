import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catagories from './components/Catagories';
import './App.css';
import BookList from './components/BookList';

const bookList = [
  {
    id: 1,
    title: 'Harry Potter and the Goblet',
    author: 'J. K. Rowling',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J. K. Rowling',
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BookList bookList={bookList} />} />
          <Route exact path="/catagories" element={<Catagories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

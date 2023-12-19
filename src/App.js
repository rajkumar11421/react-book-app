import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBookComponent from './components/ListBookComponent';
import AddBookComponent from './components/AddBookComponent';

function App() {
  return (
    <div>
      
    <HeaderComponent/>
    <BrowserRouter>
    <Routes>
      	<Route path="/" element={<ListBookComponent />}/>
        <Route path = "/books" element={<ListBookComponent />} />
        <Route path="/add-book" element={<AddBookComponent />} />
        <Route path="/edit-book/:id" element={<AddBookComponent />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

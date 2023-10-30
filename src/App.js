import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBookComponent from './components/ListBookComponent';
import AddBookComponent from './components/AddBookComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route exact path = "/" component = {ListBookComponent}></Route>
              <Route path = "/books" component = {ListBookComponent}></Route>
              <Route path = "/add-book" component = {AddBookComponent} ></Route>
              <Route path = "/edit-book/:id" component = {AddBookComponent}></Route>
            </Routes>
        </div>
        <FooterComponent />
        </Router>
    </div>
  );
}

export default App;

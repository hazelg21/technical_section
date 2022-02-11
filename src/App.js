import logo from './logo.svg';
import './App.css';

import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppNavBar from './components/AppNavBar';

import HelloWorld from './pages/HelloWorld';
import Counter from './pages/counter';
import Calculator from './pages/calculator';
import StopButton from './pages/stopbutton';
import Todo from './pages/todoList';
import CardList from './pages/cardList';

function App() {
  return (
        

        <BrowserRouter>
        <AppNavBar />
        <div>

          <Routes>
            <Route path='/' element={<HelloWorld />}></Route>
            <Route path='/counter' element={<Counter />}></Route>
            <Route path='/calculator' element={<Calculator />}></Route>
            <Route path='/stopbutton' element={<StopButton />}></Route>
            <Route path='/todo' element={<Todo />}></Route>
            <Route path='/cardlist' element={<CardList />}></Route>
          </Routes>
        </div>
        </BrowserRouter>

  );
}

export default App;

import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './Componets/Header';
import Appbook from './Componets/Addbook';
import Home from './Componets/Home';
import Books from './Componets/Book/Books';
import About from './Componets/About';
import BookDetails from './Componets/Book/BookDetails';
function App() {
  return (
    <BrowserRouter>
    <div className="">
       <header>
        <Header/>
       </header>
       <main>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/add' element={<Appbook/>} />
            <Route exact path='/books' element={<Books/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/books/:id' element={<BookDetails/>}/>
          </Routes>
       </main>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

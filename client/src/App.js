import { Routes, Route } from 'react-router-dom';
import About from './page/About';
import Home from './page/Home';
import Contact from './page/Contact';
import Policy from './page/Policy';
import PageNotFound from './page/PageNotFound';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
   
    </>
  );
}

export default App;

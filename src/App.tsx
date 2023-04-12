import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
      </div>
      <Container>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/contact' element={<Contact />}>
          </Route>
        </Routes>
      </Container>

      <p>Footer</p>
    </BrowserRouter>
  );
}

export default App;

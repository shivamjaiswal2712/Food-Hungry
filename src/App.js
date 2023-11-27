import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Home from './pages/home/Home';
import CategoryPage from './pages/category/CategoryPage';
import Contact from './pages/contact/Contact';
import ProductPage from './pages/productPage/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navigation />
        <ScrollToTop>
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/contact' exact Component={Contact} />
            <Route path='/:category/' exact Component={CategoryPage} />
            <Route path='/:category/:id' exact Component={ProductPage} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

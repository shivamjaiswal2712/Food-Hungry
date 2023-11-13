// import { Link } from 'react-router-dom';
import './App.css';
import Button from './components/Button';
// import Input from './components/Input';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
// import Navigation from './components/Navigation';
// import Lists from './components/Lists';
// import Links from './components/Links';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        {/* <Input /> */}
        {/* <Links /> */}
        {/* <Lists /> */}
        {/* <Navigation /> */}
        <ScrollToTop />
        <Footer />
      </header>
    </div>
  );
}

export default App;

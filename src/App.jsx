import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import './index.css';
import './App.css';
import Home from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


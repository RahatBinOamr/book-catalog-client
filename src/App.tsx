import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/sheared/Footer';
import Navigation from './components/sheared/Navigation';
function App() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

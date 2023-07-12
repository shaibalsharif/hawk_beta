import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router/index'
import Header from './Components/Shared/Header';
import Cursor from './Components/Shared/Cursor';
import Footer from './Components/Shared/Footer';
function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <Cursor />
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;

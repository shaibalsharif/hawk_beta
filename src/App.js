import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router/index'
import Header from './Components/Shared/Header';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;

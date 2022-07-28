import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupPage from './pages/SIgnupPage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;

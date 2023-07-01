
import LoginPage from './components/LoginPage';
import Home from './components/Home'
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


const App = () => {
    return (
        <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>

        </>

    )
}


export default App;

import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Details from './components/Details/Details.jsx';

function App() {
  return (
        <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/details" element={<Details/>}/>
            </Routes>
        </BrowserRouter>
        </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import DirectorContainer from './pages/DirectorContainer';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="directors" element={ <DirectorContainer />} />
                    <Route path="about" element={ <About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

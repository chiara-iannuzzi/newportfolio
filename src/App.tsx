import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home'
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<p>Sorry, nothing here</p>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
        </Routes>
    </BrowserRouter>
  </>
  );
};

export default App;
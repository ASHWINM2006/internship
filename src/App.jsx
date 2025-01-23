import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './FunctionComponent/Navbar';
import Home from './FunctionComponent/Home';
import About from './FunctionComponent/About';
import Contact from './FunctionComponent/Contact';
import Signup from './FunctionComponent/Signup';
import Gallery from './FunctionComponent/Gallery';
import Login from './FunctionComponent/Login';
import UseState from './FunctionComponent/UseState';
import UseEffect from './FunctionComponent/UseEffect';
import UseEffectAPI from './FunctionComponent/UseEffectAPI';
import UseEffectAPIimage from './FunctionComponent/UseEffectAPIimage';
import UseRef from './FunctionComponent/UseRef';
import UseMemo from './FunctionComponent/UseMemo';
import UseCallback from './FunctionComponent/UseCallback';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/UseState" element={<UseState/>} />
        <Route path="/UseEffect" element={<UseEffect/>} />
        <Route path="/UseEffectAPI" element={<UseEffectAPI/>} />
        <Route path="/UseEffectAPIimage" element={<UseEffectAPIimage/>}></Route>
        <Route path="/UseRef" element={<UseRef/>}></Route>
        <Route path="/UseMemo" element={<UseMemo/>}></Route>
        <Route path="/UseCallback" element={<UseCallback/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
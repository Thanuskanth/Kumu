import React from 'react';
import Nav from './components/navbar.component';
import Header from './components/navbar.component/nav';
import Slider from './components/slider.component';
import Body from './components/body';
import Secound from './components/body/secound';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Header/>
     <Slider/>
     <Secound/>
     <Body/>
     <Footer/>

    </div>
  );
}

export default App;

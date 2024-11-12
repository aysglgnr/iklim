import React from 'react';
import Navbar from './Components/Navbar'; 
import Header from './Components/Header'; 
import Egitim from './Components/Egitim'; 
import Form from './Components/Form'; 


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Egitim/>
      <Form/>
    </div>
  );
}

export default App;
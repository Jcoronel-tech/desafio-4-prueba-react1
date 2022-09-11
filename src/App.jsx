import React from 'react'
import DataApi from './componets/DataApi'
import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';

const App = () => {

  return (
    <>
      <Header/>
      <DataApi/>
      <Footer/>
    </>
  )
}

export default App
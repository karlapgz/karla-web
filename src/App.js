import React from "react";
import Nav from './components/Nav/Nav'
import './App.css';

function App() {
  return ( 
    <> 
        <Nav />
        <main className="main-home">
            <div className="text">
                <p>Hola, soy</p>           
                <h1>Karla Guzmán</h1>
                <h2>Frontend Jr. <span className="line-divisor">|</span> Estudiante de Informática</h2>
            </div>
            <iframe src='https://my.spline.design/untitled-447887cffa79cafd19c8fd145a56f681/' frameborder='0' width='100%' height='100%' title='froggy'></iframe>
        </main>
    </>
  )
}

export default App


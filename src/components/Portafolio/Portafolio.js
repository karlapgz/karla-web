import React from 'react'

import Nav from '../Nav/Nav';
import Project from './Project';

import './Portafolio.css'

function Portafolio() {

    const proyectos = [
        {
            id: 1,
            nombre: 'Space Tourism',
            leng: 'React',
            desc: 'Pagina que simula viajes por el espacio presentando planetas, crew y tecnologías',
            url: 'https://space-tourism-eosin.vercel.app/'
        },
        {
            id: 2,
            nombre: 'URL shortening',
            leng: 'HTML, CSS, JS, API',
            desc: 'Página web que acorta links, use la API shortening y los links se van juntando en una lista donde cada uno tiene un botón para copiar el nuevo link.',
            url: 'https://url-shortening-api-nu.vercel.app/'
        },
        {
            id: 3,
            nombre: 'Sunnyside agency',
            leng: 'HTML, CSS, JS, Responsive',
            desc: 'Agencia creativa especializada en ayudar a las marcas a crecer rápidamente, es responsive en celular.',
            url: 'https://sunnyside-agency-landing-page-main-murex.vercel.app/'
        },
        {
            id: 4,
            nombre: 'Library',
            leng: 'HTML, CSS, JS',
            desc: 'Librería que simula fichas de libros, donde se pueden registrar el nombre, autor, núm. de páginas y si se ha leído o no. Al actualizar la página no se pierden los registros.',
            url: 'https://library-pearl.vercel.app/'
        },
        {
            id: 5,
            nombre: 'Pomodoro timer',
            leng: 'HTML, CSS, JS',
            desc: 'Pomodro Timer permite poner un temporizador de 25 minutos para trabajar/estudiar, además la página permite poner música lofi si se desea.',
            url: 'https://pomodoro-timer-sandy.vercel.app/'
        },
        {
            id: 6,
            nombre: 'Tip calculator',
            leng: 'HTML, CSS, JS',
            desc: 'Tip calculator calcula la propina y el costo total por persona.',
            url: 'https://tip-calculator-app-green.vercel.app/'
        },
        
    ]

  return (
    <>
        <Nav />
        <main className='main-portafolio'>
            <section className='portafolio-section'>
                {proyectos.map(proy => {
                    return <Project key={proy.id} projects={proy} />;
                })} 
            </section>
        </main>
    </>
  )
}

export default Portafolio
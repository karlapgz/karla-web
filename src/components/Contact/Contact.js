import React, {useRef} from "react";
import Nav from '../Nav/Nav'

import emailjs from 'emailjs-com' 

import './Contact.css'

const Contact = () => {

    const form = useRef();

    const enviarEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dvxau5i', 'template_uby4ybl', form.current, 'Mbng72btw1KBdy5L2').then(res => {
            alert('Mensaje enviado');
            console.log(res)
        })
    }

    return (
        <>
            <Nav />
            <main className="main-contact">
                <section className="contact-form">
                    <h1>Contacto ✉️</h1>
                    <form ref={form} onSubmit={enviarEmail}>
                        <label>Nombre</label>
                        <br/>
                        <input type='text' name="user_name" placeholder='Nombre'/>
                        <br/>

                        <label>Email</label>
                        <br/>
                        <input type='email' name="user_email" placeholder='ejemplo@email.com'/>
                        <br/>

                        <label>Mensaje</label>
                        <br/>
                        <textarea name="message"/>
                        <br/>
                        <input className='btn-submit' type='submit'/>
                    </form>
                </section>
            </main>       
        </>
    )
}

export default Contact;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Contact() {

        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm('service_iuwzaut', 'template_u95efar', form.current, {
              publicKey: '-jZ2Fuctdb1E1mzvW',
            })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
            NotificationManager.info('Your message has been sent');
        };

  return (
    <div className='contactmain'>
        <div className='contactheader'>
            <h1>CONTACT US</h1>
            <hr className='horizontalruler'/>
            <h3>Please fill out the form below to 
                send us an email and we will get back 
                to you as soon as possible.
            </h3>
        </div>
        <div className='infocontainer'>
            <div className='formarea'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name"  id='name' placeholder='  Enter your name'/>
                    <input type="email" name="user_email"  placeholder='  Enter your email'/>
                    <textarea id='textarea' name="message" placeholder='  Enter your message'/>
                    <input type="submit" value="Send" id="submit"/>
                    <NotificationContainer />
                </form>
            </div>
            <div className='infoarea2'>
                <h1>Contact Info</h1>
                <h3>Addres: No 7 Peace Drive, GRA Port Harcourt</h3>
                <h3> Phone: +234 60758330</h3>
                <h3> Email: techlodas@gmail.com</h3>
            </div>
            &nbsp;
        </div>
      
    </div>
  )
}

export default Contact

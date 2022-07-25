import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('');
            }
                } else {
                    if (!e.target.value.length) {
                        setErrorMessage(`${e.target.name} is required.`);    
                    } else {
                        setErrorMessage('');
                    }
            };
        }
    
    function handleSubmit(e) {
        e.preventDefault();
            if (!errorMessage) {
                setFormState({ [e.target.name]: e.target.value })
            }
        };
        
    return (
        <section >
            <h4>Contact Me</h4>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input className='feedback' type="text" defaultValue={name} onBlur={handleChange} name="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input className='feedback' type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea className='feedback' name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                        {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                        )}
                </div>
                <button type="submit">Submit</button>
                </form>
            </section>
        );
    };
    
    export default Contact;                         

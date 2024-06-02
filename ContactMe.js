import React, { useState } from 'react';
import './contactMe.scss';
import { IoIosCloseCircleOutline } from "react-icons/io";

const ContactMe = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted successfully:", formData);
            setSubmitted(true);
        } else {
            setErrors(validationErrors);
        }
    }

    const handleReset = () => {
        setSubmitted(false);
        setFormData({
            username: '',
            email: '',
            message: '',
        });
        setErrors({});
    }

    const validateForm = (formData) => {
        let errors = {};
        if (!formData.username.trim()) {
            errors.username = "Username is required";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.message.trim()) {
            errors.message = "Message is required";
        }
        return errors;
    }

    return (
        <div className='Contact'>
            {submitted ? (
                <div className="success-message">
                    <p>Message sent successfully!</p>
                    <button onClick={handleReset}><IoIosCloseCircleOutline /></button>
                </div>
            ) : (
                <>
                    <h2>Message</h2>
                    <form className='container' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder='Name'
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <p>{errors.username && <span>{errors.username}</span>}</p>
                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <p>{errors.email && <span>{errors.email}</span>}</p>
                        <textarea
                            type="message"
                            name="message"
                            placeholder='Message'
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <p>{errors.message && <span>{errors.message}</span>}</p>
                        <button type='submit'>Send</button>
                    </form>
                </>
            )}
        </div>
    );
}

export default ContactMe;

import React from 'react';
import Head from 'next/head';
import Header from '../components/Header'; 

// This component represents the "Contact Me" page.
const Contact = () => {
  return (
    <div className='container'>
      <Head>
        <title>Contact Me</title>
      </Head>
      
      <Header />

      <div className="content">
        <h1>Contact Me</h1>

        {/* Introduction paragraph */}
        <p>If you have any questions, project inquiries, or just want to say hello, feel free to get in touch with me. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>

        {/* Contact form */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>

        {/* Static contact image */}
        <img src="/static/images/contact.jpg" alt="Contact" />

        <style jsx>{`
          .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #242424; 
            color: #ffffff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          }

          .content {
            max-width: 800px;
            margin: 20px auto;
            padding: 40px;
            background: linear-gradient(145deg, #1e1e1e, #292929); 
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); 
          }

          h1 {
            font-size: 2.5rem;
            margin-bottom: 30px;
            color: #4d4dff; 
          }

          p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #cccccc; 
            margin-bottom: 20px;
          }

          img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
            margin-top: 20px;
            margin-left: 90px; // Adjust margin as needed
          }

          .contact-form {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
          }

          .form-group {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
          }

          label {
            font-size: 1.2rem;
            color: #ff4d4d; 
          }

          input,
          textarea {
            padding: 10px;
            border: 1px solid #cccccc;
            border-radius: 8px;
            font-size: 1rem;
          }

          button {
            padding: 10px 20px;
            background-color: #4d4dff; 
            color: #ffffff;
            border: none;
            border-radius: 8px;
            font-size: 1.2rem;
            cursor: pointer;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Contact;

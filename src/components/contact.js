import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../components/contact.scss';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ioc8j3k', 'template_pr49gys', form.current, 'tG5Ol8s5ab_RJTauy').then(
      (result) => {
        console.log(result.text);
        console.log('message sent');
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="contact-header">
      <div className="contact-content">
        <div className="about-title">
          <h1 className="about-glow">
            <span style={{ '--i': 0 }}>C</span>
            <span style={{ '--i': 1 }}>O</span>
            <span style={{ '--i': 2 }}>N</span>
            <span style={{ '--i': 3 }}>T</span>
            <span style={{ '--i': 4 }}>A</span>
            <span style={{ '--i': 5 }}>C</span>
            <span style={{ '--i': 6 }}>T</span>
          </h1>
        </div>
        <div className="container-contact">
          <div className="contact-info">
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faLocationDot} />
                <FontAwesomeIcon icon="fa-solid fa-envelope" />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>Lampung, Indonesia</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>ahmadriduwan.dev@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form
              ref={form}
              onSubmit={sendEmail}
            >
              <h2>Send Massage</h2>
              <div className="input-box">
                <input
                  type="text"
                  name="user_name"
                  required
                />
                <span>Full Name</span>
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="user_email"
                  required
                />
                <span>Email</span>
              </div>
              {/* <div className="input-box">
                <input
                  type="text"
                  name="subject"
                  required
                />
                <span>Subject</span>
              </div> */}
              <div className="input-box">
                <textarea
                  name="message"
                  required
                ></textarea>
                <span>Type Your Message...</span>
              </div>
              <div className="input-box">
                <input
                  type="submit"
                  className="email-btn"
                  value="Send"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

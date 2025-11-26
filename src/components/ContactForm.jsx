import React from 'react'
import InputGroup from './sub-component/InputGroup';
import ArrowButton from './sub-component/ArrowButton';

export default function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <form action="">
          <InputGroup label={"Full Name"} type={"text"} placeholder={"your full name"} labelFor={"name"} />
          <InputGroup label={"Company"} type={"text"} placeholder={"company name"} labelFor={"companyName"} />
          <InputGroup label={"Email"} type={"email"} placeholder={"your email"} labelFor={"email"} />
          <InputGroup label={"Contact Number"} type={"tel"} placeholder={"your phone number"} labelFor={"contactNumber"} />
          <InputGroup label={"Budget Range"} type={"text"} placeholder={"your budget range"} labelFor={"budgetRange"} />
          <InputGroup label={"Message"} type={"textarea"} placeholder={"your project is about"} labelFor={"message"} classes={'last'} />
          <div className="action-button">
            <ArrowButton varient={'dark'} text={'Send Message'} type={'link'} />
          </div>
        </form>
      </div>
    </section>
  )
}

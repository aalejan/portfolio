import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import './contact.css'


 function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_cokwtqh', 'template_mt720vh', e.target, 'user_tcnm7f96gYfYKXsxoBm7n')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  }

  return (
      <div className='contact'>
    <Contact id="Contact">
    
    <form className="contact-form" onSubmit={sendEmail}>
    <div className='title'>Contact Me</div>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input className= 'submit' type="submit" value="Send Message" />
    </form>
    </Contact>
    </div>
  );
}

const Contact = styled.div`
width: 100%;
background: white;
color:black;
font-family: 'Lobster', cursive;
margin: auto;
margin-top: 2rem;
margin-bottom: 2rem;
display: flex;
justify-content: center;
box-shadow: 2px 2px 4px 5px #141414;
border-radius: 3px;
input:focus {
        outline:none;
    }

.title{
    font-family: 'Lobster', cursive;
    font-size: 6rem;
}

form{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    width: 500px;
    input{
        border-bottom: 1px solid black;
       border-top: none;
       border-right: none;
       border-left: none;
       margin-bottom: 1.5rem;
    }
    .submit{
        width: 100px;
        border: 1px solid black;
        margin-top: 1rem;
        border-radius: 10px;
    }
    div{
        text-align: center;
    }
    textarea{
        height: 100px;
    }
    textarea:focus{
        outline:none;
    }
}
@media(max-width: 375px){
    form{
        width:250px;
        textarea{
        height: 50px;
        } 
    }
   width: 80%;
}
@media(max-width: 414px){
    form{
        width:250px;
        textarea{
        height: 50px;
        } 
    }
   width: 80%;
}

`

export default ContactUs
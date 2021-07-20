import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

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
      <ReachOut className='contact'>
          <h2>Reach Out!</h2>
          <ul>
              <li className='email'><a className='email' rel='noopener' href='mailto:eaglesalejandro.aa@gmail.com'><HiOutlineMail className='icon email'  /><span>eaglesalejandro.aa@gmail.com</span></a></li>
              <li className='github'><a className='github' rel='noopener' href='github.com/aalejan'><FaGithub className='icon github ' /><span>github.com/aalejan</span></a></li>
              <li className='linkedIn'><a className='linkedIn' rel='noopener' href='https://www.linkedin.com/in/alexander-alejandro/'><FaLinkedinIn  className='icon linkedIn'/><span>https://www.linkedin.com/in/alexander-alejandro/</span></a></li>
          </ul>
    {/* <Contact id="Contact">
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
    </Contact> */}
    </ReachOut>
  );
}

const ReachOut = styled.div`
padding-top: 10rem;
    color: black;
    background: #d2d2d2;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        font-size: 4rem;
        font-weight: 700;
    }

    .email:hover{
            color: red;
        }
        .linkedIn:hover{
            color: #65b2de
        }
    .github:hover{
        color: #66b44f
    }

    ul{
        display: block;
        
        li{
            span{
                margin-left: 1rem;
            }
            margin-top: 3rem;
            font-size: 2.5rem;
            line-height: 2.5rem;
            list-style: none;
        }
        a{
            text-decoration: none;
            color: black;
            .icon{
                font-size: 4rem;
                color: black;
            }
            
        }
    }
`

const Contact = styled.div`
width: 70%;
background: #585757; 
color:black;
font-family: 'Lobster', cursive;
margin: auto;
margin-top: 2rem;
margin-bottom: 2rem;
display: flex;
justify-content: center;
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
    width: 70%;
    input{
        border-bottom: 1px solid black;
       border-top: none;
       border-right: none;
       border-left: none;
       margin-bottom: 1.5rem;
       background: transparent;
    }
    textarea{
        background-color: transparent;
        outline: none;
        border: none;
        background: #7c7a7a;
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


`

export default ContactUs
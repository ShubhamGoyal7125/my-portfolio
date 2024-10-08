import React, {useRef, useState} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const [messageSentDisplay, setMessageSentDisplay] = useState('none');
  const [messageNotSentDisplay, setMessageNotSentDisplay] = useState('none');
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_yala6zi', 'template_stsrilg', form.current, 'uEAPW8I89362NTiAl')
      .then((result) => {
        console.log(result.text);

        if (result.text == "OK") {
          setMessageSentDisplay("block");
          setTimeout(() => {
            setMessageSentDisplay("none");
          }, 2000);
        }
        else {
          setMessageNotSentDisplay("block");
          setTimeout(() => {
            setMessageNotSentDisplay("none");
          }, 2000);
        }

      }, (error) => {
        console.log(error.text);
          setMessageNotSentDisplay("block");
          setTimeout(() => {
            setMessageNotSentDisplay("none");
          }, 2000);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <div className="contact__option">
            <MdOutlineEmail className='contact__option__icon'/>
            <h4>Email</h4>
            <h5>shubhamgoyal7125@gmail.com</h5>
            <a href="mailto:shubhamgoyal7125@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </div>

          <div className="contact__option">
            <BsLinkedin className='contact__option__icon'/>
            <h4>LinkedIn</h4>
            <h5>shubham goyal</h5>
            <a className="badge-base__link LI-simple-link" target="_blank" rel="noopener noreferrer" href="https://in.linkedin.com/in/shubham-goyal-7987461b8?trk=profile-badge">Let's Connect and Talk</a>
          </div>

          <div className="contact__option">
            <BsWhatsapp className='contact__option__icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 8053889763 </h5>
            <a href="https://wa.me/918053889763" target="_blank" rel="noopener noreferrer">Send a message</a>
          </div>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name*' required />
          <input type="email" name='email' placeholder='Your Email*' required/>
          <textarea name="message" rows="7" placeholder='Your Message*' required></textarea>
          <div className="form__buttons">
          <button type="submit" className='btn btn-primary'>Send Message</button>
            <button className='after__message__send' style={{ display: messageSentDisplay }}>Message Sent Successfully</button>
            <button className='after__message__send' style={{ display: messageNotSentDisplay }}>Error Occured!!</button>
          </div>
        </form>

      </div>
    </section>
  )
}

export default Contact











// import React, {useState} from 'react'
// import './contact.css'
// import {MdOutlineEmail} from 'react-icons/md'
// import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'

// const Contact = () => {
//   const [messageSentDisplay, setMessageSentDisplay] = useState('none');
  

//   const handleSend = ()=>{
//       setMessageSentDisplay("block");
//     setTimeout(() => {
//       setMessageSentDisplay("none");
//     }, 2000);
//   }

//   return (
//     <section id='contact'>
//       <h5>Get In Touch</h5>
//       <h2>Contact Me</h2>

//       <div className="container contact__container">
//         <div className="contact__options">

//           <div className="contact__option">
//             <MdOutlineEmail className='contact__option__icon'/>
//             <h4>Email</h4>
//             <h5>shubhamgoyal7125@gmail.com</h5>
//             <a href="mailto:shubhamgoyal7125@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
//           </div>

//           <div className="contact__option">
//             <BsLinkedin className='contact__option__icon'/>
//             <h4>LinkedIn</h4>
//             <h5>shubham goyal</h5>
//             {/* <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="shubham-goyal-7987461b8" data-version="v1"><a className="badge-base__link LI-simple-link" target="_blank" rel="noopener noreferrer" href="https://in.linkedin.com/in/shubham-goyal-7987461b8?trk=profile-badge">Let's Connect and Talk</a></div> */}
//           </div>

//           <div className="contact__option">
//             <BsWhatsapp className='contact__option__icon'/>
//             <h4>Whatsapp</h4>
//             <h5> </h5>
//             <a href="https://wa.me/918053889763" target="_blank" rel="noopener noreferrer">Send a message</a>
//           </div>

//         </div>

//         <form>
//           <input type="text" name='name' placeholder='Your Full Name' required />
//           <input type="email" name='email' placeholder='Your Email' required/>
//           <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
//           <div className="form__buttons">
//           <button type="submit" className='btn btn-primary' onClick={handleSend}>Send Message</button>
//           <button className='btn' id='after__message__send' style={{display: messageSentDisplay}}>Message Sent Successfully</button>
//           </div>
//         </form>

//       </div>
//     </section>
//   )
// }

// export default Contact
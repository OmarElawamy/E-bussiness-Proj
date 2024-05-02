import React from "react";

import Pic9 from "../components/imgs/Contact us-amico.svg";

class Contact extends React.Component{
    render(){
        return(

        <section class="contact">
            <div class="container contact_container">
                <aside class="contact_aside">
                    <div class="aside_image">
                        <img src={Pic9}/>
                    </div>
                    <h2>Contact Us</h2>
                    <p>
                        Whether you have questions about our courses, need guidance choosing the right path,
                        our friendly support team is here to help! Don't hesitate to reach out.
                    </p>
                    <ul class="contact_details">
                        <li>
                            <i class="uil uil-phone-times"></i>
                            <h5>26+ 888 263-3699</h5>
                        </li>
                        <li>
                            <i class="uil uil-envelope"></i>
                            <h5>MyCode@support.com</h5>
                        </li>
                        <li>
                        <i class="uil uil-map-marker"></i>
                            <h5>Mansoura</h5>
                        </li>
                    </ul>
                    <ul class="contact_socials">
                        <li> <a href="https://facebook.com" target="_blank"><i class="uil
                        uil-facebook-f"></i></a> </li>
                        <li> <a href="https://instagram.com" target="_blank"><i class="uil
                        uil-instagram"></i></a> </li>
                        <li> <a href="https://twitter.com" target="_blank"><i class="uil
                        uil-twitter"></i></a> </li>
                        <li> <a href="https://linkedin.com" target="_blank"><i class="uil
                        uil-linkedin-alt"></i></a> </li>
                    </ul>
                </aside>
    
    
    
                <form class="contact_form">
                    <div class="form_name">
                        <input type="text" name="First Name" placeholder="First Name" required/>
                        <input type="text" name="Last Name" placeholder="Last Name" required/>
                    </div>
                    <input type="email" name="Email Address" placeholder="Your Email Address" required/>
                    <textarea name="Message" rows="8" required placeholder="Message"></textarea>
                    <button type="submit" class="btn btn-primary">Send Message</button>
    
                </form>
    
    
            </div>
        </section>

        ) 
    }
}


export default Contact;
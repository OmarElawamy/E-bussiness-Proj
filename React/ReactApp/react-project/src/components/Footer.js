import React from "react";
import { NavLink ,Link } from "react-router-dom";


class Footer extends React.Component{
    render(){
        return(
            <footer class="footer">
        <div class="container footer_container">
            <div class="footer_1">
                <a href="index.html" class="footer_logo">
                    <h3>MyCode;</h3>
                </a>
                <p>Start Learning and Grow Your Skills With Our Courses</p>
            </div>

            <div class="footer_2">
                <h3>Links</h3>
                <ul class="links">
                <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/courses">Courses</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              
            </div>

            <div class="footer_3">
                <h3>Privacy</h3>
                <ul class="Privacy">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms and Condition</a></li>
                </ul>
            </div>

            <div class="footer_4">
                <h3>Contact Us</h3>
                <div>
                    <p>26+ 888 263-3699</p>
                    <p>MyCode@support.com</p>
                </div>

                <ul class="footer_socials">
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" class="uil uil-facebook-f"></a>
                    </li>   
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" class="uil uil-instagram-alt"></a>
                    </li>  
                    <li>
                        <a href="https://www.twitter.com/" target="_blank" class="uil uil-twitter"></a>
                    </li>  
                    <li>
                        <a href="https://www.linkedin.com/" target="_blank" class="uil uil-linkedin-alt"></a>
                    </li> 
                </ul>         
            </div>
        </div>

        <div class="footer_copyright">
            <small>All rights reserved &copy; MyCode;</small>
        </div>
    </footer>

        )

}
}

export default Footer;

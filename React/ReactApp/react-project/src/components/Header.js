import React from "react";
import { NavLink ,Link } from "react-router-dom";


class Header extends React.Component{
    render(){
        return(
<nav>
                <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>MyCode</title>

    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>

    <link rel="stylesheet" href="./css/style.css"/>

    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Alexandria:wght@100;400;500;600;800;900&family=Cairo:wght@200;400;500;700;1000&family=Montserrat:ital,wght@0,400;0,500;0,900;1,600;1,700;1,800;1,900&family=Nerko+One&family=Roboto:ital,wght@0,400;0,700;0,900;1,500;1,700&family=Sen:wght@400;700;800&display=swap"
        rel="stylesheet" />


            <div class="container nav_container">
                <a href="/">
                    <h4>MyCode;</h4>
                </a>
                <ul class="nav_menu">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/courses">Courses</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <button id="open-menu-btn"><i class="uil uil-bars"></i></button>
                <button id="close-menu-btn"><i class="uil uil-multiply"></i></button>
            </div>
            
</nav>  
        )
    }
}


export default Header;
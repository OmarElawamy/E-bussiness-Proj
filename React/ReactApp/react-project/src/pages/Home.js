import React from "react";

import Pic1 from "../components/imgs/Premium Vector _ Programmer desk_.jpeg";
import Pic2 from "../components/imgs/OS - The Unlimited Expansion Operating System.jpeg";
import Pic3 from "../components/imgs/collecting analysing and using.jpeg";
import Logo from "../components/imgs/Webinar-amico.svg";






class Home extends React.Component {
    render() {
        return(
<main>
    <header>
        <div class="container header_container">
            <div class="header_left">
                <h1>Start Learning and Grow Your Skills With Our Courses</h1>
                <p>“Any fool can write code that a computer can understand. Good programmers write code that humans can
                    understand.”
                    - Martin Fowler</p>
                <a href="courses.html" class="btn btn-primary">Get Started</a>
            </div>
            <div class="header_right">
                <div class="header_right-image">
                    <img src={Logo} alt="" />
                </div>

            </div>
        </div>
    </header>
                <section class="categories">
                    <div class="container categories_container">
                        <div class="categories_left">
                            <h1>Categories</h1>
                            <p>Whether you're a complete beginner or looking to expand your skillset, MyCode offers a wide range of courses categorized. This makes it easy to find the perfect course to fit your goals, from learning the fundamentals to mastering advanced topics.</p>
                            <a href="#" class="btn">Learn More</a>
                        </div>
                        <div class="categories_right">
                            <article class="category">
                                <span class="category_icon"><i class="uil uil-bitcoin"></i></span>
                                <h5>Blockchain</h5>
                                <p>A secure, shared database that tracks information transparently.</p>
                            </article>
                            <article class="category">
                                <span class="category_icon"><i class="uil uil-adobe"></i></span>
                                <h5>Graphic Design</h5>
                                <p>Visually communicating ideas to inform, inspire, and engage.</p>
                            </article>
                            <article class="category">
                                <span class="category_icon"><i class="uil uil-html5"></i></span>
                                <h5>Web Development</h5>
                                <p>Building and maintaining websites and web applications for the internet.</p>
                            </article>
                            <article class="category">
                                <span class="category_icon"><i class="uil uil-invoice"></i></span>
                                <h5>Marketing</h5>
                                <p>Reaching the right audience with the right message to achieve goals.</p>
                            </article>
                            <article class="category">
                                <span class="category_icon"><i class="uil uil-desktop-cloud-alt"></i></span>
                                <h5>Cloud</h5>
                                <p>Design, develop, and deploy scalable and flexible solutions.</p>
                            </article>
                            <article class="category">
                                <span class="category_icon"><i class="uil uil-brackets-curly"></i></span>
                                <h5>Programming</h5>
                                <p>Giving instructions to computers to automate tasks and solve problems.</p>
                            </article>
                        </div>
                    </div>
                </section>



                <section class="courses">
                    <h2>Our Popular Courses</h2>
                    <div class="container courses_container">
                        <article class="course">
                            <div class="course_image">
                                <img src={Pic1} alt="" />
                            </div>
                            <div class="course_info">
                                <h3>Web Development</h3>
                                <p>Web development involves creating and maintaining websites and web applications.</p>
                                <a href="" class="btn btn-primary">Learn More</a>
                            </div>
                        </article>
                        <article class="course">
                            <div class="course_image">
                                <img src={Pic2} alt="" />
                            </div>
                            <div class="course_info">
                                <h3>Operating System</h3>
                                <p>An operating system manages computer hardware and provides common services for programs.</p>
                                <a href="" class="btn btn-primary">Learn More</a>
                            </div>
                        </article>
                        <article class="course">
                            <div class="course_image">
                                <img src={Pic3} alt="" />
                            </div>
                            <div class="course_info">
                                <h3>Data Structure</h3>
                                <p>Data structures are arrangements used to store and manage data efficiently for easy access.</p>
                                <a href="" class="btn btn-primary">Learn More</a>
                            </div>
                        </article>
                    </div>
                </section>
</main>

        ) 
    }
}

export default Home;
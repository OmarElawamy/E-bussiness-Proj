import React from "react";

import course1 from "../components/imgs/Premium Vector _ Programmer desk_.jpeg";
import course2 from "../components/imgs/OS - The Unlimited Expansion Operating System.jpeg";
import course3 from "../components/imgs/collecting analysing and using.jpeg";
import course4 from "../components/imgs/arch.jpg";
import course5 from "../components/imgs/linaear.jpg";
import course6 from "../components/imgs/cyber.jpg";
import course7 from "../components/imgs/network.jpg";
import course8 from "../components/imgs/data.jpg";
import course9 from "../components/imgs/AI.jpg";

class Courses extends React.Component{
    render(){
        return(
<section class="courses">
            <h2>Our Courses</h2>
        <div class="container courses_container">
    
                <article class="course">
                    <div class="course_image">
                        <img src={course1} alt=""/>
                    </div>
                    <div class="course_info">
                        <h3>Web Development</h3>
                        <p>Web development involves creating and maintaining websites and web applications.</p>
                        <a href="course.html" class="btn btn-primary">Learn More</a>
                    </div>
                </article>
    
    
                <article class="course">
                    <div class="course_image">
                        <img src={course2} alt=""/>
                    </div>
                    <div class="course_info">
                        <h3>Operating System</h3>
                        <p>An operating system manages computer hardware and provides common services for programs.</p>
                        <a href="course.html" class="btn btn-primary">Learn More</a>
                    </div>
                </article>
    
                <article class="course">
                    <div class="course_image">
                        <img src={course3} alt=""/>
                    </div>
                    <div class="course_info">
                        <h3>Data Structure</h3>
                        <p>Data structures are arrangements used to store and manage data efficiently for easy access.</p>
                        <a href="course.html" class="btn btn-primary">Learn More</a>
                    </div>
                </article>
    
                <article class="course">
                    <div class="course_image">
                        <img src={course4} alt=""/>
                    </div>
                    <div class="course_info">
                        <h3>Computer Architecture</h3>
                        <p>Computer architecture involves designing the structure and functionality of computer systems.</p>
                        <a href="course.html" class="btn btn-primary">Learn More</a>
                    </div>
                </article>
    
                <article class="course">
                    <div class="course_image">
                        <img src={course5} alt=""/>
                    </div>
                    <div class="course_info">
                        <h3>Linear Algebra</h3>
                        <p>Linear algebra studies linear equations, vectors, matrices, and their properties and applications in mathematics.</p>
                        <a href="course.html" class="btn btn-primary">Learn More</a>
                    </div>
                </article>
    
                <article class="course">
                    <div class="course_image">
                        <img src={course6} alt=""/>
                    </div>
                    <div class="course_info">
                        <h3>Cyper Security</h3>
                        <p>Cybersecurity focuses on protecting systems, networks, and data from digital threats and attacks.</p>
                        <a href="course.html" class="btn btn-primary">Learn More</a>
                    </div>
                </article>
    
                <article class="course">
                    <div class="course_image">
                        <img src={course7} alt=""/>
                    </div>
                    <div class="course_info">
                        <h3>Networks</h3>
                        <p>Networks enable devices to communicate and share resources, forming the foundation of modern connectivity.</p>
                        <a href="course.html" class="btn btn-primary">Learn More</a>
                    </div>
                </article>
    
                <article class="course">
                    <div class="course_image">
                        <img src={course8} alt=""/>
                    </div>
                    <div class="course_info">
                        <h3>Data Science</h3>
                        <p>
                            Data science involves analyzing and interpreting complex data to make informed decisions and predictions.</p>
                        <a href="course.html" class="btn btn-primary">Learn More</a>
                    </div>
                </article>
    
                <article class="course">
                    <div class="course_image">
                        <img src={course9} alt=""/>
                    </div>
                    <div class="course_info">
                        <h3>Artificial Intelligence</h3>
                        <p>Artificial Intelligence (AI) involves creating intelligent machines that can mimic human behavior.</p>
                        <a href="course.html" class="btn btn-primary">Learn More</a>
                    </div>
                </article>
        </div>       
</section>

        )
    }
}


export default Courses;
import React from "react";

import Pic4 from "../components/imgs/indian-male-achieved-his-dream.svg";
import Pic5 from "../components/imgs/michael.jpeg";
import Pic6 from "../components/imgs/roger.png";
import Pic7 from "../components/imgs/Frank.jpg";
import Pic8 from "../components/imgs/robin.jpg";

import axios from "axios";


class About extends React.Component {
    state = {
        users: [],
        currentUserIndex: 0
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
          .then(response => {
            this.setState({
              users: response.data
            });
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
      }



    render() {
        const { users, currentUserIndex } = this.state;
        const currentUser = users.length > 0 ? users[currentUserIndex] : null;

        return(
            <main>
   <section class="about_achievements">
        <div class="container about_achievements-container">
            <div class="about_achievemants-left">
                <img src={Pic4} alt=""/>
            </div>

            <div class="about_achievemants-right">
                <h1>Achievements</h1>
                <p>you can see MyCode's achievements in education. <br/>
                    What are you waiting for let's start your journey with us!
                </p> <br/>
                <div class="achievements_cards">
                    <article class="achievement_card">
                        <span class="achievement_icon">
                            <i class="uil uil-video"></i>
                        </span>
                        <h3>80+</h3>
                        <p>Courses</p>
                    </article>

                    <article class="achievement_card">
                        <span class="achievement_icon">
                            <i class="uil uil-users-alt"></i>
                        </span>
                        <h3>3000+</h3>
                        <p>Students</p>
                    </article>

                    <article class="achievement_card">
                        <span class="achievement_icon">
                            <i class="uil uil-award"></i>
                        </span>
                        <h3>10+</h3>
                        <p>Awards</p>
                    </article>

                </div>
            </div>
        </div>
    </section>



<section class="team">
    <h2>Meet Our Team</h2>
    <div class="container team_container">
        <article class="team_member">
            <div class="team_member_image">
                <img src={Pic5}/>
            </div>
            <div class="team_member_info">          
                {currentUser ? (
          <div>
            <h4>{currentUser.name}</h4>
          </div>
        ) : (
          <p>No user available</p>
        )}

                <p>Teacher</p>
            </div>
            <div class="team_member_socials">
                <a href="https://instagram.com" target="_blank"><i class="uil-instagram-alt"></i></a>
                <a href="https://twitter.com" target="_blank"><i class="uil-twitter-alt"></i></a>
                <a href="https://linkedin.com" target="_blank"><i class="uil-linkedin-alt"></i></a>

            </div>
        </article>

        <article class="team_member">
            <div class="team_member_image">
                <img src={Pic6} alt=""/>
            </div>
            <div class="team_member_info">
            {currentUser ? (
          <div>
            <h4>{currentUser.name}</h4>
          </div>
        ) : (
          <p>No user available</p>
        )}
                <p>Expert Teacher</p>
            </div>
            <div class="team_member_socials">
                <a href="https://instagram.com" target="_blank"><i class="uil-instagram-alt"></i></a>
                <a href="https://twitter.com" target="_blank"><i class="uil-twitter-alt"></i></a>
                <a href="https://linkedin.com" target="_blank"><i class="uil-linkedin-alt"></i></a>

            </div>
        </article>

        <article class="team_member">
            <div class="team_member_image">
                <img src={Pic7} alt=""/>
            </div>
            <div class="team_member_info">
                <h4>Frank Lampard</h4>
                <p>Expert Tutor</p>
            </div>
            <div class="team_member_socials">
                <a href="https://instagram.com" target="_blank"><i class="uil-instagram-alt"></i></a>
                <a href="https://twitter.com" target="_blank"><i class="uil-twitter-alt"></i></a>
                <a href="https://linkedin.com" target="_blank"><i class="uil-linkedin-alt"></i></a>

            </div>
        </article>

        <article class="team_member">
            <div class="team_member_image">
                <img src={Pic8} alt=""/>
            </div>
            <div class="team_member_info">
                <h4>Robin van Persie</h4>
                <p>Instractor</p>
            </div>
            <div class="team_member_socials">
                <a href="https://instagram.com" target="_blank"><i class="uil-instagram-alt"></i></a>
                <a href="https://twitter.com" target="_blank"><i class="uil-twitter-alt"></i></a>
                <a href="https://linkedin.com" target="_blank"><i class="uil-linkedin-alt"></i></a>

            </div>
        </article>


    </div>
</section>
            </main>
        ) 
    }
}

export default About;
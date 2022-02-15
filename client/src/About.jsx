import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
class About extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>About</h2>
                            <ol>
                                <li><Link to='/'>Home</Link></li>
                                <li>About</li>
                            </ol>
                        </div>

                    </div>
                </section>
                <section id="about-us" class="about-us">
                    <div class="container" data-aos="fade-up">

                        <div class="row content">
                            <div class="col-lg-6" data-aos="fade-right">
                                <h2>THEINSIGHTS DIGITALS</h2>
                                <h3>A digital company that protray the technical innovation in the world of Tech, 
                                    Stationed to provide solution to Techie challanges.</h3>
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left">
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                                <ul>
                                    <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequa</li>
                                    <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                    <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</li>
                                </ul>
                                <p class="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>


                <section id="team" class="team section-bg">
                    <div class="container">

                        <div class="section-title" data-aos="fade-up">
                            <h2>Our <strong>Team</strong></h2>
                            <p>Our Team comprises of self motivated minded crew, passionated to problem solving within the contrains of available resources.
                                Everyone pictured in the section is thr Head of Our Technical Department, representing individual members of the department.
                              </p>
                        </div>

                        <div class="row">

                            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div class="member" data-aos="fade-up">
                                    <div class="member-img">
                                        <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="team-1" />
                                        <div class="social">
                                            <Link to='/about'><i class="bi bi-twitter"></i></Link>
                                            <Link to='/about'><i class="bi bi-facebook"></i></Link>
                                            <Link to='/about'><i class="bi bi-instagram"></i></Link>
                                            <Link to='/about'><i class="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div class="member" data-aos="fade-up" data-aos-delay="100">
                                    <div class="member-img">
                                        <img src="assets/img/team/team-2.jpg" class="img-fluid" alt="team-2" />
                                        <div class="social">
                                            <Link to='/about'><i class="bi bi-twitter"></i></Link>
                                            <Link to='/about'><i class="bi bi-facebook"></i></Link>
                                            <Link to='/about'><i class="bi bi-instagram"></i></Link>
                                            <Link to='/about'><i class="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Product Manager</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div class="member" data-aos="fade-up" data-aos-delay="200">
                                    <div class="member-img">
                                        <img src="assets/img/team/team-3.jpg" class="img-fluid" alt="team-3" />
                                        <div class="social">
                                           <Link to='/about'><i class="bi bi-twitter"></i></Link>
                                            <Link to='/about'><i class="bi bi-facebook"></i></Link>
                                            <Link to='/about'><i class="bi bi-instagram"></i></Link>
                                            <Link to='/about'><i class="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <h4>William Anderson</h4>
                                        <span>CTO</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                                <div class="member" data-aos="fade-up" data-aos-delay="300">
                                    <div class="member-img">
                                        <img src="assets/img/team/team-4.jpg" class="img-fluid" alt="team-4" />
                                        <div class="social">
                                            <Link to='/about'><i class="bi bi-twitter"></i></Link>
                                            <Link to='/about'><i class="bi bi-facebook"></i></Link>
                                            <Link to='/about'><i class="bi bi-instagram"></i></Link>
                                            <Link to='/about'><i class="bi bi-linkedin"></i></Link>
                                        </div>
                                    </div>
                                    <div class="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Accountant</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section id="skills" class="skills">
                    <div class="container">

                        <div class="section-title" dataAos="fade-up">
                            <h2>Our <strong>Skills</strong></h2>
                            <p>The pictorial chat here discribes our Technical strenght for Web related service we render at theInsights. 
                                Though this does not justify our customer services strenghts, we go extra mile to put a smile on the face of our clients.
                                </p>
                        </div>

                        <div class="row skills-content">

                            <div class="col-lg-6" dataAos="fade-up">

                                <div class="progress">
                                    <span class="skill">HTML/CSS <i class="val">100%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}}></div>
                                    </div>
                                </div>

                                <div class="progress">
                                    <span class="skill">Digital Marketing (SEO, SMM, SEM, PR) <i class="val">95%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="75" style={{width:'95%'}}></div>
                                    </div>
                                </div>

                                <div class="progress">
                                    <span class="skill">JavaScript <i class="val">85%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="75" style={{width:'85%'}}></div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-6" dataAos="fade-up" data-aos-delay="100">

                                <div class="progress">
                                    <span class="skill">PHP <i class="val">70%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:'70%'}}></div>
                                    </div>
                                </div>

                                <div class="progress">
                                    <span class="skill">WordPress/CMS <i class="val">90%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}></div>
                                    </div>
                                </div>

                                <div class="progress">
                                    <span class="skill">Photoshop <i class="val">65%</i></span>
                                    <div class="progress-bar-wrap">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"style={{width:'65%'}}></div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

export default About;
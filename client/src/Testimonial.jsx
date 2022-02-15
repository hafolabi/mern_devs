import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

class Testimonial extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>Testimonials</h2>
                            <ol>
                                <li><Link to='/'>Home</Link></li>
                                <li>Testimonials</li>
                            </ol>
                        </div>

                    </div>
                </section>

                <section id="testimonials" class="testimonials section-bg">
                    <div class="container">

                        <div class="row">

                            <div class="col-lg-6" data-aos="fade-up">
                                <div class="testimonial-item">
                                    <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="" />
                                    <h3>Adeola Adekanmi</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Am exicted to be here, all my request was patiently attented to, with a very good after services offer, You would need to try them out now with no aftermath regret. Their services got you covered.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <div class="testimonial-item mt-4 mt-lg-0">
                                    <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="" />
                                    <h3>Sara Chindy</h3>
                                    <h4>Designer</h4>
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Am exicted to be here, all my request was patiently attented to, with a very good after services offer, You would need to try them out now with no aftermath regret. Their services got you covered.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                <div class="testimonial-item mt-4">
                                    <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="" />
                                    <h3>Jane Christopher</h3>
                                    <h4>Store Owner</h4>
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Am exicted to be here, all my request was patiently attented to, with a very good after services offer, You would need to try them out now with no aftermath regret. Their services got you covered.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                                <div class="testimonial-item mt-4">
                                    <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="" />
                                    <h3>Mattew Ogunsola</h3>
                                    <h4>Freelancer</h4>
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Am exicted to be here, all my request was patiently attented to, with a very good after services offer, You would need to try them out now with no aftermath regret. Their services got you covered.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                                <div class="testimonial-item mt-4">
                                    <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="" />
                                    <h3>John Lawson</h3>
                                    <h4>Entrepreneur</h4>
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Am exicted to be here, all my request was patiently attented to, with a very good after services offer, You would need to try them out now with no aftermath regret. Their services got you covered.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
                                <div class="testimonial-item mt-4">
                                    <img src="assets/img/testimonials/testimonials-6.jpg" class="testimonial-img" alt="" />
                                    <h3>Emily Adeogun</h3>
                                    <h4>Store Owner</h4>
                                    <p>
                                        <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Am exicted to be here, all my request was patiently attented to, with a very good after services offer, You would need to try them out now with no aftermath regret. Their services got you covered.
                                        <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
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

export default Testimonial;
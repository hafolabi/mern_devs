import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

class Pricing extends React.Component {
    render() {
        return (
            <div >
                <Navbar />
                <section id="breadcrumbs" class="breadcrumbs" >
                    <div class="container" >

                        <div class="d-flex justify-content-between align-items-center" >
                            <h2 > Pricing </h2>
                            <ol>
                                <li > < Link to='/' > Home </Link></li >
                                <li > Pricing </li>
                            </ol >
                        </div>

                    </div>
                </section >


                <section id="pricing" class="pricing" >
                <div class = "container"data-aos = "fade-up" >

                <div class = "row" >

                <div class = "col-lg-3 col-md-6" >
                <div class = "box" >
                <h3> Free </h3> <h4 > <sup> $ </sup>0<span> /month  </span></h4 >
                <ul >
                <li > Design Creatives </li>
                <li> FDesign Mock up </li>
                <li > SM Page / Website Audit </li>
                <li class = "na" > Frontend Dev.</li>
                <li class = "na" > Hosting / SM Mangegment </li>
                </ul >
                <div class = "btn-wrap" >
                <Link to = '/Pricing'class = "btn-buy" > Buy Now </Link>
                </div >

                </div>
                </div >

                <div class = "col-lg-3 col-md-6 mt-4 mt-md-0" >
                <div class = "box featured" >
                <h3> Business </h3> <h4 > < sup > $ </sup>19<span> / month </span></h4>
                <ul>
                <li > Design Creatives </li>
                <li > Design Mock up </li>
                <li > SM Page / Website Audit </li>
                <li > Frontend Dev.</li>
                <li class = "na" > Hosting / SM Mangegment </li>
                </ ul >
                <div class = "btn-wrap" >
                <Link to = '/Pricing'class = "btn-buy" > Buy Now </Link>
                </div>
                </div>
                </div>

                <div class = "col-lg-3 col-md-6 mt-4 mt-lg-0" >
                <div class = "box" >
                <h3 > Developer </h3>
                <h4 > <sup > $  </sup>29<span> /month </span></h4 >
                <ul >
                <li > Design Creatives </li> <li > Design Mock up </li> <li > SM Page / Website Audit </li>
                <li > Frontend Dev.</li> <li > Hosting / SM Mangegment </li> </ul >
                <div class = "btn-wrap" >
                <Link to = '/Pricing'class = "btn-buy" > Buy Now </Link>
                </div >

                </div>
                </ div >

                <div class = "col-lg-3 col-md-6 mt-4 mt-lg-0" >
                <div class = "box" >
                <span class = "advanced" > Advanced </span> <h3 > Ultimate </h3> <h4 > < sup > $ </sup>49<span> / month </span></h4>
                <ul >
                <li > Design Creatives </li>
                < li > Design Mock up </li>
                <li > SM Page / Website Audit </li>
                < li > Frontend Dev.</li>
                <li > Hosting / SM Mangegment </li>
                </ul >

                <div class = "btn-wrap" >
                <Link to = '/Pricing'class = "btn-buy" > Buy Now </Link>
                </div>

                </div>
                </div>

                </div>
            </div>
        </section > 
        <Footer />
            </div >


        )
    }
}

export default Pricing;
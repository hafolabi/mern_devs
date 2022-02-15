import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const User = ()=> {
    let user= JSON.parse(localStorage.getItem('user-info'))
        return (
            <div>
                    <Navbar />
                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">

                        <div class="d-flex justify-content-between align-items-center">
                            <h2>User Page</h2>
                            <ol>
                                <li><Link to='#'>Home</Link></li>
                                <li>User Page</li>
                            </ol>
                        </div>

                    </div>
                </section>

                <section >
                    <div class="container">
                         <div class="row justify-content-center apiCall" data-aos="fade-up">

                            <div class="col-lg-10 info-wrap">
                                <h1 style={{textAlign:'center', textTransform:'uppercase',fontWeight:'550'}}>{user.firstName} you are Welcome to your Dashboard</h1>

                            </div>

                        </div>

                        <div class="row justify-content-center" data-aos="fade-up">

                            <div class="col-lg-4 info-wrap mt-5 userDetails" >
                                <span style={{textAlign:'center'}}>Profile Picture</span>

                            </div>

                            <div class="col-lg-8 info-wrap mt-5">
                                <h3 style={{textAlign:'center'}}>Users Details</h3>

                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
   
}

export default User;
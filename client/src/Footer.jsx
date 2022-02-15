import React from 'react'
import {Link} from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer id="footer">

<div class="footer-top">
  <div class="container">
    <div class="row">

      <div class="col-lg-3 col-md-6 footer-contact">
        <h4>theInsights</h4>
        <p>
        Charity Street <br/>
          Abijo GRA, Ajah Lagos,<br/>
          Lagos States, Nigeria <br/><br/>
          <strong>Phone:</strong> +234 8089 5548 55<br/>
          <strong>Email:</strong> info@theinsights.com.ng<br/>
        </p>
      </div>

      <div class="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <Link to='/'>Home</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to='/'>About us</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to='/'>Terms of service</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to='/'>Privacy policy</Link></li>
        </ul>
      </div>

      <div class="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <Link to='/'>Web Design</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to='/'>Web Development</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to='/'>Marketing</Link></li>
          <li><i class="bx bx-chevron-right"></i> <Link to='/'>Graphic Design</Link></li>
        </ul>
      </div>

      <div class="col-lg-4 col-md-6 footer-newsletter">
        <h4>Join Our Newsletter</h4>
        <p>kindly insert your email  </p>
        <form action="" method="post">
          <input type="email" name="email" /><input type="submit" value="Subscribe" />
        </form>
      </div>

    </div>
  </div>
</div>

<div class="container d-md-flex py-4">

  <div class="me-md-auto text-center text-md-start">
    <div class="copyright">
      &copy; Copyright <strong><span>theInsights</span></strong>. All Rights Reserved
    </div>

  </div>
  <div class="social-links text-center text-md-right pt-3 pt-md-0">
    <Link to='/' class="twitter"><i class="bx bxl-twitter"></i></Link>
    <Link to='/' class="facebook"><i class="bx bxl-facebook"></i></Link>
    <Link to='/' class="instagram"><i class="bx bxl-instagram"></i></Link>
    <Link to='/' class="google-plus"><i class="bx bxl-skype"></i></Link>
    <Link to='/' class="linkedin"><i class="bx bxl-linkedin"></i></Link>
  </div>
</div>
</footer>
            </div>
        )
    }

}

export default Footer;
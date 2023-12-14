import React from 'react';
import Logo1 from "../../Public/imgs/Logo1.png";
import payment from "../../Public/imgs/payment.png";
import { FaYoutube, FaFacebook, FaInstagram, FaHome, FaTwitter } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
      <div className='container' >
      <div className='lg'>
          <img className='logo' src={Logo1} alt='logodark' />
          <p className='copyright'>® cosmoglow 2023</p>
          <img className='payment-logo' src={payment} alt='paymentlogo' />
          <div className='social-icons'>
            <FaFacebook className='icon ' />
            <FaInstagram className='icon '/>
            <FaYoutube className='icon ' />
            <FaTwitter className='icon ' />
          </div>
        </div>
        <div className='location'>
          <h2>Locate Us</h2>
          <div>
            <p>Big-bang center ,23150,Beni Mellal</p>
            <p>Phone : +212 (0) 678785512</p>
            <p>Mobile : +212 (0) 546463312</p>
            <p>Email : cosmoglow@gmail.com</p>
          </div>
        </div>
        <div className="profile">
          <h2>Profile</h2>
          <div >
            <p className="profile-item">
              <span className="icon">
                <BsPersonFill />
              </span>
              My Account
            </p>
            <p className="profile-item">
              <span className="icon">
                <BsPaypal />
              </span>
              CheckOut
            </p>
            <p className="profile-item">
              <span className="icon">
                <FaHome />
              </span>
              Order tracking
            </p>
            <p className='profile-item'>
                <span className='icon'>
                    <MdContactPage/>
                </span>
                Help & Support
            </p>

          </div>
        </div>
        <div className='contact-form'>
          <input type='text' placeholder='e-mail' />
          <textarea  type='text' placeholder='Your message'></textarea>
          <button type="submit">Send</button>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;

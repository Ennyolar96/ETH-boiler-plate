import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import {
  FaFacebookF,
  FaGit,
  FaGithub,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';
// import ThemeToggle from './ThemeToggle';
import classes from "./Style.module.css"

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className="container">
        <div className='row row-cols-lg-3'>
          <div className='col'>
            <h2 className={classes.title}>Support</h2>
            <ul className={classes.footerul}>
              <li className='text-sm py-2'>Help Center</li>
              <li className='text-sm py-2'>Contact Us</li>
              <li className='text-sm py-2'>API Status</li>
              <li className='text-sm py-2'>Documentation</li>
            </ul>
          </div>

          <div className='col'>
            <h2 className={classes.title}>Info</h2>
            <ul className={classes.footerul}>
              <li className='text-sm py-2'>About Us</li>
              <li className='text-sm py-2'>Careers</li>
              <li className='text-sm py-2'>Invest</li>
              <li className='text-sm py-2'>Legal</li>
            </ul>
          </div>

          <div className='col'>
            <p className={classes.title}>Sign up for crypto news</p>
            <form>
              <input className='form-control' type='email' inputMode='email' placeholder='Enter your email' />
              <br />
              <button className={classes.btn}>Sign up</button>
            </form>

            {/* contact details */}
            <div className={classes.contact}>
              <p><AiOutlineInstagram /></p>
              <p><FaTiktok /></p>
              <p><FaTwitter /></p>
              <p><FaFacebookF /></p>
              <p><FaGithub /></p>
            </div>
          </div>

        </div>
        {/* <p className={classes.toggle}><ThemeToggle /></p> */}
        <p className='text-center py-4'>Powered by Coin Gecko</p>
      </div>
    </section>
  );
};

export default Footer;

import React from 'react'
import './Footer.css'
import YoutubeIcon from '../../assets/youtube_icon.png'
import TwitterIcon from '../../assets/twitter_icon.png'
import InstagramIcon from '../../assets/instagram_icon.png'
import FacebookIcon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={FacebookIcon} alt="FacebookIcon" />
        <img src={InstagramIcon} alt="InstagramIcon" />
        <img src={TwitterIcon} alt="TwitterIcon" />
        <img src={YoutubeIcon} alt="YoutubeIcon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>&copy; 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer

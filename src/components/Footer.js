import React from 'react';

import { FaFacebook } from 'react-icons/fa';
import { BsInstagram, BsGithub, BsYoutube } from 'react-icons/bs';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer">
            <div className='footer-logos'>
                <a href='https://www.facebook.com/calvinlangerr/'><FaFacebook className='facebook-icon' /></a>
                <a href='https://www.instagram.com/mr.langer_/?hl=en'><BsInstagram className='instagram-icon' /></a>
                <a href='https://github.com/CalvinLanger'><BsGithub className='github-icon' /></a>
                <a href='https://www.youtube.com/channel/UCFxJkV9Gk9zej3nbsvxgpSw'><BsYoutube className='youtube-icon' /></a>
            </div>
            <div className="copyright"> Copyright &copy; {year} Abstergo.inc | Made by Bartlomiej Langer</div>
        </div>
    );
};

export default Footer;;
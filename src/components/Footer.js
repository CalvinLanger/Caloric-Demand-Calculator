import React from 'react';

import { BsGithub, BsLinkedin, BsTelegram } from 'react-icons/bs';
import { SiBitcoincash } from 'react-icons/si';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer">
            <div className='footer-logos'>

                {/* LINKEDIN LINK */}
                <a href='https://www.linkedin.com/in/bartlomiej-harasim-008a40269/'><BsLinkedin className='linkedin-icon' /></a>
                {/* GITHUB LINK */}
                <a href='https://github.com/CalvinLanger'><BsGithub className='github-icon' /></a>
                {/* TELEGRAM LINK */}
                <a href='https://t.me/Mr_Langerr'><BsTelegram className='telegram-icon' /></a>

            </div>
            <div className="copyright"> Copyright &copy; {year} Abstergo.inc | Made by Bartlomiej Langer</div>
        </div>
    );
};

export default Footer;;
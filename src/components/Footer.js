import React from 'react';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer">&copy; Copyright {year} Abstergo.inc - Made by Calvin Langer</div>
    );
}

export default Footer;
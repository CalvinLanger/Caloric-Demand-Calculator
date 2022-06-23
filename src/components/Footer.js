import React from 'react';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer">
            <div className="copyright">&copy; Copyright {year} Abstergo.inc - Made by Calvin Langer
            </div>
        </div>
    );
}

export default Footer;
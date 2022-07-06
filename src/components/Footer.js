import React from 'react';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer">
            <div className="copyright"> Copyright &copy; {year} Abstergo.inc - Made by Bartlomiej Langer
            </div>
        </div>
    );
}

export default Footer;
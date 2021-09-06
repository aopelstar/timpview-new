import React from 'react';
import Banner from '../banner/Banner'
import './thanks.css';

export default function Thanks(){
    return(
        <div className="contact-wrapper">
            < Banner />
            <div className="contact-banner">
                Get Stoked
            </div>
            <div className="thanks-desc">
                Thanks for reaching out!  You'll be getting a call from us in no time. 
            </div>
                
        </div>
    )
}
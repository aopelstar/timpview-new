import React, { Component } from 'react';
import './about.css';
import pic from '../../images/self.jpg';
import pic2 from '../../images/kc.jpg';
import Banner from '../banner/Banner';

export default class About extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="about-wrapper">
                <Banner />
                <div className="about-banner">
                    About
                    <div className="photo-container">

                        <img src={pic} alt="dumb" className="photo" />
                        <div className="about-desc">
                            DJAK
                        </div>
                    </div>

                </div>
                <div className="about-content">
                    <div>
                        
                    Charity never faileth and neither does DJAK.  As the owner and operator
                    of Timpview Events, it is likely you will meet him at some point
                    throughout your journey with us.  DJAK has countless hours of experience 
                    as an MC and DJ.  He'll take your party up a notch without even breaking 
                    a sweat.
                       
                    </div>

                </div>
                <div className="photo-container">

                        <img src={pic2} alt="dumb" className="photo" />
                        <div className="about-desc2">
                            MC Casey
                        </div>
                    </div>
                    <div className="about-content">
                    <div>
                        
                    MC Casey has been hosting events in Utah for many years now,
                        and is excited to host yours.  Whether you're looking to have a party
                        or a formal evening, Casey is ready and excited to help you have
                        a night you'll fondly remember.
                       
                    </div>

                </div>
            </div>
        )
    }
}
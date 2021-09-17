import React, { Component } from 'react';
import './events.css';
import Banner from '../banner/Banner';
import pic from '../../images/corp.jpg'
import Foot from '../foot/foot';

export default class Events extends Component {
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className="event-wrapper">
                <Banner />
                <div className="event-banner">
                    <div>Corporate Events</div>
                    <img src = {pic} alt = 'dumb' className="event-photo" />
                </div>
                <div className="event-content">
                    <div>
                        
                    Corporate parties are hard.  Trying to ride the line of fun and 
                    professionalism is often difficult. Lucky for you, Timpview Events 
                    has a boatload of experience and can ride that line all night.
                    Let us help you take a load off, we are ready to take some of 
                    that stress so you can focus on the party.
                    </div>
                    
                    
                    <div>
                        Timpview Events can take your event to the next level.  We'll bring lights,
                        speakers and some serious stage presence.  The party goes all night with 
                        Timpview Events.
                        <div className="chat">
                            Give us a call and we will help you take your event up a notch.
                            </div>
                    </div>
                </div>

                <div className="call-to-action">
                <a href="tel:1-801-319-0708"><button>call us: 801-319-0708</button></a>
                </div>
                <Foot />
            </div>
        )
    }
}
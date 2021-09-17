import React, { Component } from 'react';
import './weddings.css';
import Banner from '../banner/Banner';
import pic from '../../images/wed.jpg';
import Foot from '../foot/foot'

export default class Weddings extends Component {
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className="wedding-wrapper">
                <Banner />
                <div className="wedding-banner">
                    <div>Weddings</div>
                    <img src = {pic} alt = 'dumb' className="wedding-photo" />
                </div>
                <div className="wedding-content">
                    <div>
                        
                    At Timpview Events, we totally get it: This is your special day and you want it to be perfect.
                    Our DJs have hundreds, even thousands, of hours of experience running weddings.  We know what
                    it takes to make sure yours is memorable and stress free.  
                    </div>
                    <div>
                    We have all seen those DJs that are on their phones or disengaged from the wedding.  You won't find that
                    at Timpview Events. Our DJs will be focused on your wedding from the planning stages, all the way to
                    the sparkler send off.
                    </div>
                    <div>
                    As your DJ, we are committed to meeting with you and planning out your wedding.  Your vision and concerns
                    are our top proriety and much like your wedding dress, we make sure it is a 
                    wedding that it tailor-made for you.
                        <div className="chat">
                            Call us and let's chat.
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
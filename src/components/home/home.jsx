import React, { Component } from 'react';
import Banner from '../banner/Banner'
import Foot from '../foot/foot'
import './home.css';
import pic from '../../images/stock.jpg'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }



    render(){
        return(
            <div className = "home-wrapper">
                <Banner />
                <div className="logo">
                    <img src = {pic} alt="something" className="photo" />
                    <div className="logo-desc">
                        
                        We want to rock your socks off and we're gonna.
                    </div>
                </div>
                <div className ="home-content">
                    <p className="home-copy-top">
                    Parties Are Awesome. 
                    </p>
                    <p className="home-copy-top-fill">
                    Parties can be pretty stressful, too.  
                    Whether a wedding or a corporate event, 
                    Timpview Events has got you covered. 
                    Let us worry about the entertainment so that you can get to partying.
                    </p>
                </div>
                <div className="call-to-action">
                <a href="tel:1-801-319-0708"><button>call us: 801-319-0708</button></a>
                </div>
            < Foot/>
                
            </div>
        )
    }
}
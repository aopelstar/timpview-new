import React, { Component } from 'react';
import './foot.css';
import insta from '../../images/insta.png'
import spot from '../../images/spotify.png'

export default class Foot extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div className="foot-wrapper">
                <div className="foot-items">
                    <div className="foot-desc">
                    Follow Us:
                    </div>
                    <div className="foot-icon">
                        <a href="https://www.instagram.com/timpviewevents/" className="social-a">
                        <img src ={insta} className="insta-photo" alt="dumb"/>
                        </a>
                    </div>
                </div>
                <div className="foot-items">
                    <div className="foot-desc">
                    Current Favs:
                    </div>
                    <div className="foot-icon">
                        <a href='https://open.spotify.com/playlist/0R7jt5jxwT6l167fgW91i0?si=LJ2QCY2YQ7-hP53rQ2KbRw&dl_branch=1' className="social-a">
                    <img src ={spot} className="insta-photo" alt="dumb"/>
                    </a>
                    </div>
                </div>
            </div>
        )
    }
}
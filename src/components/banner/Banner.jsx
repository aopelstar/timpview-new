import React, { Component } from 'react';
import './banner.css';
import { Link } from 'react-router-dom';
 

export default class Banner extends Component{
constructor(){
    super()
    this.state = {
        services: false
    }
}

dropTrigger(){
    this.setState({
        services: !this.state.services
    })
}

render(){
    return(
        <div className="banner-wrapper">
            <div className="banner-items">
            <Link to = '/'><div>Home</div></Link>
            <div onClick={() => this.dropTrigger()}>Services</div>
            <Link to = '/about'><div>About</div></Link>
            <Link to = '/contact'><div>Contact</div></Link>
            <Link to = '/faq'><div>FAQ</div></Link>
            </div>
            <div className={this.state.services?"services-drop services-drop-true":"services-drop"}>
                <Link to ='/weddings'><div>Weddings</div></Link>
                <Link to = '/events'><div>Corporate Events </div></Link>
                {/* <Link to = '/photo'><div>PhotoBooth Rental</div></Link> */}
            </div>
        </div>
    )
}

}
import React,  { Component } from 'react';
import './faq.css';
import Banner from '../banner/Banner';
import pic from '../../images/faq.jpeg';
import Foot from '../foot/foot'

export default class Faq extends Component {

    constructor(){
        super();
        this.state={
            price: false,
            include: false,
            deposit: false,
            vendors: false,

        }
    }

    faqTrigger(key){
        this.setState({
            [key]: !this.state.key
        })
    }

    render(){
        return(
            <div className="faq-wrapper">
                <Banner />
                <div className="faq-banner">
                <div>Frequently Asked Quetions</div>
                <img src = {pic} alt = 'dumb' className="faq-photo" />
                </div>
                <div className="faq-content">
                    <div className="faq-topic">
                        <div className="faq-topic-title" onClick={() => this.faqTrigger("price")}> 
                        - Pricing
                        </div>
                        <div className={this.state.price?"faq-topic-content":"faq-topic-content-hidden"}>
                            Each party is different and has different needs.  With so many different variables, the only way to receive an accurate idea of the price is by contacting us.
                        </div>
                    </div>

                    <div className="faq-topic">
                        <div className="faq-topic-title" onClick={() => this.faqTrigger("include")}> 
                        - What's included?
                        </div>
                        <div className={this.state.include?"faq-topic-content":"faq-topic-content-hidden"}>
                            Timpview Events offers a breadth of different services.  We offer DJ and MC services, we are also able to provide lighting.  We pride ourselves on our flexibility and resourcefulness, if there is anything specific you'd like, don't hesitate to ask.
                        </div>
                    </div>
                    <div className="faq-topic">
                        <div className="faq-topic-title" onClick={() => this.faqTrigger("deposit")}> 
                        - Is there a deposit?  When is it due?
                        </div>
                        <div className={this.state.deposit?"faq-topic-content":"faq-topic-content-hidden"}>
                            For corporate parties or weddings, we insist that we meet with our clients at least two weeks before the event.  The deposit of $100 will be due at that time.  After that, payment will be expected any time up to two days before the event.
                        </div>
                    </div>
                    <div className="faq-topic">
                        <div className="faq-topic-title" onClick={() => this.faqTrigger("vendors")}> 
                        - Do you have any preferred vendors?
                        </div>
                        <div className={this.state.vendors?"faq-topic-content":"faq-topic-content-hidden"}>
                            So glad that you asked!  Timpview Events has a number of preferred vendors.  
                            <div>
                                <a href="http://www.awesomeweddingcakescheap.com" >• Awesome Wedding Cakes Cheap</a>
                            </div>
                            <div>
                            <a href ="http://www.clariongardens.com">• Clarion Gardens</a>
                            </div>
                            <div>
                            <a href ="http://www.maddiebridgephotography.com">• Maddie Bridge Photography </a>
                            </div>
                            <div>
                            <a href ="http://www.lesleeraephotography.com">• Leslee Rae Photography </a>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <Foot />
            </div>
        )
    }
}
import React from 'react'
import CardItem from "./CardItem";
import './Cards.css';
import Waterfall from "../assets/images/img-9.jpg"
import Cruise from "../assets/images/img-2.jpg"
import Sail from "../assets/images/img-3.jpg"
import Himalayas from "../assets/images/img-4.jpg"
import Sahara from "../assets/images/img-8.jpg"

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations! </h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className='cards_items'>
                        <CardItem
                            src={Waterfall}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={Cruise}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards_items'>
                        <CardItem
                            src={Sail}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={Himalayas}
                            text='Experience Football on Top of the Himalayan Mountains'
                            label='Adrenaline'
                            path='/products'
                        />
                        <CardItem
                            src={Sahara}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Explore'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

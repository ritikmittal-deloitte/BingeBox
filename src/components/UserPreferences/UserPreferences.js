import React, { useState } from 'react'
import './UserPreferences.scss'
import Comedy from './images/comedy.png'
import Drama from './images/drama.png'
import Horror from './images/horror.png'
import Kids from './images/kids.png'
import Romantic from './images/romantic.png'
import Action from './images/action.png'
import Documentaries from './images/documentaries.png'
import Hollywood from './images/hollywood.png'
import Bollywood from './images/bollywood.png'
import Fantasy from './images/fantasy.jpg'
import Binge from './images/BINGE.png'
import Box from './images/BOX.png'
import CardComponent from './CardComponent'

export default function UserPreferences() {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    return (
        <div className='user-preferences-page' style={{ color: 'white' }}>
            <div className='main-container-preferences'>
                <div className='binge-box-heading'>
                    <div className='binge-heading'>
                        <img src={Binge} style={{}} alt='logo not available'/>
                    </div>
                    <div className='box-heading'>
                        <img src={Box} style={{}} alt='logo not available'/>
                    </div>
                </div>
                <div className='contents-preferences'>
                    <div className='main-container'>
                        <div className='skip-row'>
                            <div className='you-prefer-text'>You Prefer</div>
                            <div className='skip-text'>Skip</div>
                        </div>
                        <div className='contents-row'>
                            <div className='contents-boxes'>
                                {preferences.map((item, index) => {
                                    return (
                                        <div key={index} className={`category-preferences-box ${hoveredIndex === index ? 'zoomed' : ''}`}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}
                                            >
                                            <CardComponent item={item} />
                                        </div>)
                                })}
                            </div>
                        </div>
                        <div className='next-row'>
                            <div className='next-text'>Next</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const preferences = [
    {
        img: Horror,
        category: 'Horrors & Thrillers'
    },
    {
        img: Comedy,
        category: 'Comedy'
    },
    {
        img: Kids,
        category: 'Kids'
    },
    {
        img: Romantic,
        category: 'Romantic'
    },
    {
        img: Action,
        category: 'Action'
    },
    {
        img: Drama,
        category: 'Drama'
    },
    {
        img: Documentaries,
        category: 'Documentaries'
    },
    {
        img: Hollywood,
        category: 'Hollywood'
    },
    {
        img: Bollywood,
        category: 'Bollywood'
    },
    {
        img:Fantasy,
        category:'Fantasy'
    }
]
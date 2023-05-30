import React from 'react';
import "./descCardComponent.scss"

const DescCardComponent = ({data}) => {
    return (
        <div className='more-like-card'>
            <img src={data.posterImage}/>
            
        </div>
    );
};

export default DescCardComponent;
import React from 'react';

import  profilePhoto from "../../assets/images/profile-photo.svg";
import "./photoComponent.scss";

const PhotoComponent = ({data}) => {
    return (
        <div className='photo-container d-flex flex-column'>
            
            <img src={data.photo} className='photo-style' style={{width:"90px"}}/>
            <p>{data.name}</p>
        </div>
    );
};

export default PhotoComponent;
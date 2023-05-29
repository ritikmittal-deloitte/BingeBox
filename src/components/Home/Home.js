import React from 'react';
import "./home.scss"
import Card from '../card/Card';
import {movies} from "../../mockData/moviesMockData"
import { ReactComponent as ScrollLogo } from "../../assets/icons/arrow.svg";

const Home = () => {
    const leftScroll=()=>{
        console.log("hey")
        const left = document.querySelector(".cards");
        left.scrollBy(-200, 0);
    }
    const rightScroll=()=>{
        console.log("bye")
        const right = document.querySelector(".cards");
        right.scrollBy(200, 0);
    }
    return (
        <div className='home-container'>

            <div className='top-movies-grid'>
                <div onClick={leftScroll} className='arrow-style'>
                <ScrollLogo />
                </div>
                
            
            
            
                
                <section className="cards">

                {
                    movies.map((movie,index)=><Card cardData={movie} key={index}/>)
                }
                </section>
                

                <div className='arrow-style1' onClick={rightScroll}>
                <ScrollLogo />
                    </div>
               
                {/* <div className="right" onclick="rightScroll()"></div> */}
                
           </div>
        
        </div>
    );
};

export default Home;
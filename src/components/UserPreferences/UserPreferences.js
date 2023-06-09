import React, { useContext, useState } from 'react'
import './UserPreferences.scss'
import { useDispatch } from "react-redux";
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
import { generatePath, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/Context/UserContext/UserState'
import { dummyData } from '../../mockData/accountsMockData'
import { AccountAction } from '../../redux/AccountSlice';

export default function UserPreferences({setIsLogin}) {
    const [hoveredIndex, setHoveredIndex] = useState(-1);
    const {genre,setGenre} = useContext(UserContext)
    const dispatch=useDispatch()
    const navigate = useNavigate()

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };
    const handleSuccessFullNavigationAfterSignUp=()=>{
            setIsLogin(true);
            dispatch(AccountAction.selectCurrentAccount(dummyData.accounts[0]))
            navigate("/home")
        
    }

    return (
        <div className='user-preferences-page' style={{ color: 'white' }}>
            <div className='main-container-preferences'>
                <div className='binge-box-heading-preference'>
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
                            <div className='skip-text' onClick={(e)=>{navigate('/home')}}>Skip</div>
                        </div>
                        <div className='contents-row'>
                            <div className='contents-boxes'>
                                {preferences.map((item, index) => {
                                    return (
                                        <div key={index} className={`category-preferences-box ${hoveredIndex === index ? 'zoomed' : ''}`}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}
                                            >
                                            <CardComponent item={item} present={checkPresent(genre,item.category)}genre={genre} setGenre={setGenre}/>
                                        </div>)
                                })}
                            </div>
                        </div>
                        <div className='next-row'>
                            <div className='next-text' onClick={handleSuccessFullNavigationAfterSignUp}>Next</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function checkPresent(arr,item){
    for(let i = 0;i<arr.length;i++){
        let a = arr[i].toLowerCase()
        if(a.includes(item.toLowerCase())){
            return true
        }
    }
    return false
}
const preferences = [
    {
        img: Horror,
        category: 'Horror'
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
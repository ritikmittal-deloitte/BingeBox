import React from 'react';
import "./CategoryType.scss";
export default function CategoryType({text,setCategories}) {
//    console.log("Text coming:",text)
    return (

    <div className='box-grey' onClick={(e)=>{setCategories(text)}}>
       &nbsp; {text}
       &nbsp;    </div>
  )
}

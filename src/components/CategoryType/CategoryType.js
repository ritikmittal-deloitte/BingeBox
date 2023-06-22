import React from 'react';
import "./CategoryType.scss";
export default function CategoryType({text,setCategories,type, setOpen}) {
//    console.log("Text coming:",text)
  const handleCategories = ()=> {
    if(type==='genre'){
      setCategories(text)
    }
    setOpen(false);
  }
    return (

    <div className='box-grey' onClick={(e)=>{handleCategories()}}>
       &nbsp; {text}
       &nbsp;    </div>
  )
}

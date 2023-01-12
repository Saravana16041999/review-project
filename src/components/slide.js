import React, { useState } from 'react'

import review from '../data'

import {
    FaQuoteRight,
    FaChevronCircleRight,
    FaChevronCircleLeft
} from 'react-icons/fa'

const Slide = () => {
    const [index,Setindex] =  useState(0)

    const {name,image,job,info} = review[index];

    const Randomuser = ()=>{
        Setindex(()=>{
            let newindex = Math.trunc(Math.random() * review.length)
            return newindex
        })
    }

    const leftSide = ()=>{
        Setindex(()=>{
      if(index === 0){
        let newindex = review.length -1;
        return newindex    
      }else{
        let newindex = index -1;
        return newindex
      }      
    })
}
    const rightSide = ()=>{
        Setindex(()=>{
      if(index === review.length -1){
        let newindex = 0;
        return newindex    
      }else{
        let newindex = index + 1;
        return newindex
      }      
    })}

  return (
    <div className='main_container'>
        <div className='img_container'>
        <span className='quote_icon'>
            <FaQuoteRight/>
        </span>
        <img src={image} alt="name" />
        </div>
        <div className='person_name'>
        {name.toUpperCase()}
        </div>
        <p className='person_job'>{job}</p>
        <p className='person_info'>{info}</p>
        <div className='btn'>
        <button type='button' className='btn_left' onClick={()=> leftSide()}>
        <FaChevronCircleLeft/>
        </button>
        <button className='random_btn' onClick={()=> Randomuser()}>Random</button>
        <button type='button' className='btn_right' onClick={()=> rightSide()}>
            <FaChevronCircleRight/>
        </button>
        </div>
    </div>
  )
}
    


export default Slide

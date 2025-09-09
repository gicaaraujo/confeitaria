"use client"

import {useState} from 'react'
import './HeartLike.css'

export default function HeartLike({initialCount = 0}:{initialCount? : number}){
   const [count, setCount] = useState(initialCount);

   function contLike(){
    setCount(count + 1);
   }
    return (
        <button className='likeBubble' onClick={contLike}>
          <span>🤍</span>
          <span className='counter'>{count}</span>
        </button>
    );
}
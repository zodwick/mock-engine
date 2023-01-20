import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Main() {

  const inputRef=useRef[null]


  return (
    <div className='contianer'>
      <h1 className='tittle text-light'>Mock Quiz</h1>
      <ol>
        <li>10 question</li>
        <li>4 for each correct answer</li>
        <li>1 mark reduced for every wrong answer</li>
        <li>all will be mcq questions</li>
        <li>results will be shown at the end</li>
      </ol>
      <form className='userid' id='form'>
        <input ref={inputRef} type="text" placeholder='Username*' />
      </form>
      <div className='start'>
        <Link className='btn' to={'quiz'}> Start </Link>
      </div>
    </div>
  )
}

import React from 'react'
import { Button } from '@/components/ui/button'

function HireMe({name = " ", title ="" ,tag1 = "", tag2 ="",src=""}) {
  return (
    <>
      <div className='m-5 bg-white-100  p-5 flex align-middle justify-center '>
        <div className='flex align-middle justify-evenly border-2  p-2 rounded-lg w-250' id='box '>
          <div id='avatar'>
  <img className='h-20 w-20 rounded-full m-5 object-cover ' src={src} alt="" />
</div>
          <div>
            <div className='text-left'>
              <h2 className='text-2xl font-bold text-gray-800 m-2 '>{name}</h2>
            </div>
            <p className='text-sm font-semibold text-gray-800  m-2'>
              {title}
            </p>
            <div className='text-left'>
                <span className='bg-pink-200 p-1 inline-block w-30  rounded-2xl m-2 text-center '>{tag1}</span>
                <span className='bg-blue-300 p-1 inline-block w-30 rounded-2xl m-2 text-center'>{tag2}</span>
            </div>

          </div>
          <Button className='bg-green-200 p-5 w-25 text-shadow-black text-8 rounded-lg mt-8 hover:shadow-green-300 cursor-pointer re'>Hire me</Button>
        </div>
      </div>
    </>
  )
}

export default HireMe

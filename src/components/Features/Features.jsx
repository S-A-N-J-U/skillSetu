import React from 'react'

function Features({ 
  title = "", 
  p = "", 
  className = "", 
  titleClassName = "", 
  paraClassName = "" ,
  src = "",
  ...props
}) {
    return (
        <div className={` p-2 ${className}`}>
            <img src= {src} className='w-30 ml-5' />

        <div>
            <h1 className={`text-xl font-bold text-gray-900 mb-2 ${titleClassName}`}>
              {title}

            </h1>

            <p className={`text-base text-gray-600 ${paraClassName}`}>
              {p}
            </p>

        </div>

        </div>
    )
}

export default Features

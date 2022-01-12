import React from 'react'

export default function Preloader() {
    return (
        <div className='preloader'>
        <div className='preloader-logo'>
          <img src='images/logo-big.png' width='129' height='39' srcSet='images/logo-big.png 2x' />
        </div>
        <div className='preloader-body'>
          <div id='loadingProgressG'>
            <div
              className='loadingProgressG'
              id='loadingProgressG_1'
            ></div>
          </div>
        </div>
      </div>
    )
}

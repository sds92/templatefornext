import React from 'react'
import { Icons } from '..'

export default function Preloader() {
    return (
        <div className='preloader'>
        <div className='preloader-logo'>
          <Icons.Belplit24 extraClasses={`w-96 h-96 animate-bounce`}/>
        </div>
        {/* <div className='preloader-body'>
          <div id='loadingProgressG'>
            <div
              className='loadingProgressG'
              id='loadingProgressG_1'
            ></div>
          </div>
        </div> */}
      </div>
    )
}

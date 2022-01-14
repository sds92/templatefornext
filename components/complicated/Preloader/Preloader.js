import React from 'react'
import { Icons } from '..'

export default function Preloader() {
    return (
        <div className='preloader'>
        <div className='preloader-logo'>
          {/* <Icons.Belplit24 extraClasses={`w-20 h-20 animate-pulse my-10`}/>
          <Icons.Belplit24 extraClasses={`w-20 h-20 animate-ping my-10`}/>
          <Icons.Belplit24 extraClasses={`w-20 h-20 animate-spin my-10`}/> */}
          <Icons.Belplit24 extraClasses={`rotate-45 w-20 h-20 animate-bounce`}/>
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

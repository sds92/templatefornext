import React from 'react';
import { Icons } from '..';

export default function Preloader(props) {
  const Icon = Icons[props?.data?.logo || 'Belplit24'];
  return (
    <div className='preloader'>
      <div className='preloader-logo'>
        <Icon extraClasses={`w-24 h-24 animate-bounce`} />
      </div>
      <div className='preloader-body'>
        <div id='loadingProgressG'>
          <div style={{background: `${props.theme.logo}`}} className='loadingProgressG' id='loadingProgressG_1'></div>
        </div>
      </div>
    </div>
  );
}

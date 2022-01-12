import React from 'react';

export default function SubTitle({children}) {
  return (
    <div className={`py-1`}>
      <p className={`text-center text-slate-800 font-light tracking-wide`}>
        <span className={``}>{children && children}</span>
      </p>
    </div>
  );
}

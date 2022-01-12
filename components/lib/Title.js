import React from 'react';

export default function Title({ a, b, atc, ats }) {
  return (
    <div className={`py-2 text-center tracking-wide`}>
      <span className={`text-${ats ? ats : '3xl'} ${atc && `text-${atc}`}`}>
        {a && a} <span className={`font-bold text-belplit24_2`}>{b && b}</span>
      </span>
    </div>
  );
}

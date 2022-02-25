import React from 'react';
import SM from './SM';
import LG from './LG';

export default function Header(props) {
  const {lgView} = props;
  return (
    <>
    <div id={`head`} className={`${lgView ? 'h-20' : 'h-16'}`}/>
    <header className={`z-50 fixed w-full top-0`}>{lgView ? <LG {...props} /> : <SM {...props} />}</header>
    </>
  );
}

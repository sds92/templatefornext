import React from 'react';

export default function Map(props) {
  return (
    <iframe
      src={props.contacts}
      width='100%'
      height='100%'
      frameBorder='1'
      allowFullScreen='true'
    ></iframe>
  );
}

import React from 'react';

export default function Map({ app }) {
  console.log('🚀 ~ file: Map.js ~ line 7 ~ Map ~ app.contacts.addresses.iframe', app);
  return (
    <iframe
      src={app.contacts.addresses[0].iframe}
      width='100%'
      height='100%'
      frameBorder='1'
      allowFullScreen='true'
    ></iframe>
  );
}

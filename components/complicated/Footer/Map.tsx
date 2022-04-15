import React from 'react';

type MapProps = {
  contacts: IApp['contacts'];
};

const Map = (props: MapProps) => {
  const { contacts } = props;
  return (
    <iframe
      src={contacts.addresses[0].iframe}
      width='100%'
      height='100%'
      frameBorder={1}
      allowFullScreen={true}
    ></iframe>
  );
};

export default Map

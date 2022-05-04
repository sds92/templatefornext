import React from 'react';

type MapProps = {
  contacts: IApp['contacts'];
};

const Map = (props: MapProps) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const { contacts } = props;
  return (
    <>
      {loading ? (
        <div className={'animate-pulse bg-black'} />
      ) : null}
      <iframe
        src={contacts.addresses[0].iframe}
        width='100%'
        height='100%'
        frameBorder={1}
        allowFullScreen={true}
        onLoad={() => setLoading(false)}
      ></iframe>
    </>
  );
};

export default Map;

import React from 'react';
import Sections from './components';

export default function FullPage({ ...props }) {
  return (
    <>
      <Sections.Main {...props} />
      <Sections.Catalog {...props} />
      <Sections.About {...props} />
      {/* <Sections.Gallery {...props} /> */}
      {/* <Sections.Contacts {...props} /> */}
    </>
  );
}

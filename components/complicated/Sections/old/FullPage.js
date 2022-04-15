import React from 'react';
import Sections from '..';

export default function FullPage({ ...props }) {
  return (
    <>
      <Sections.Main {...props} />
      {props.datafromDB[3][0] === 'shinglas' ?  <Sections.CatalogShinglas {...props} /> : <Sections.Catalog {...props} />}
      <Sections.About {...props} />
      <Sections.OrderClick {...props}/>
      <Sections.Advantages {...props}/>
      <Sections.Gallery {...props} />
      <Sections.Contacts {...props} />
    </>
  );
}

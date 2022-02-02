import React from 'react';

export default function Button({ href, children, theme, ...props }) {
  return (
    <div className={`button button-primary bg-belplit24_2 border-0 hover:bg-belplit24_2_b`} {...props}>
      <a className={``} href={href}>
        <div className={`flex items-center`}>{children && children}</div>
      </a>
    </div>
  );
}

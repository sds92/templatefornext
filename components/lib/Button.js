import React from 'react';

export default function Button({ href, children, theme, ...props }) {
  return (
    <div className={`button button-primary bg-bp_red border-0 hover:bg-bp_red_2`} {...props}>
      <a className={``} href={href}>
        <div className={`flex items-center`}>{children && children}</div>
      </a>
    </div>
  );
}

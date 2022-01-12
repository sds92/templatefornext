import React from 'react';

export default function Text({ children, ...props }) {
  function createMarkup(data) {
    return { __html: data };
  }
  return (
    <React.Fragment>
      {children && typeof children !== 'string' ? (
        <p {...props} dangerouslySetInnerHTML={createMarkup(children)}></p>
      ) : (
        <p {...props}>{children}</p>
      )}
    </React.Fragment>
  );
}

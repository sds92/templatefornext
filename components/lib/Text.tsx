import React from 'react';

type TextProps = {
  children: string | string[] | undefined;
  [key: string]: any;
};

const Text = ({ children, ...props }: TextProps) => {

  function createMarkup(data: any) {
    return { __html: data };
  }

  if (Array.isArray(children) && children.length > 1) {
    return (
      <React.Fragment>
        {children.map((child, i) => (
          typeof child === 'string' ? <p {...props}>{child}</p> : <p {...props} key={`substring${i}`} dangerouslySetInnerHTML={createMarkup(child)}></p>
        ))}
      </React.Fragment>
    );
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
};
export default Text;

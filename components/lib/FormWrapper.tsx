import Link from 'next/link';
import * as React from 'react';

const FormWrapper = (props: IFormWrapperProps) => {
  const { onSubmit, className, children, buttonText, redirectButton, userSbmtButton } = props;
  return (
    <form onSubmit={onSubmit} className={className}>
      {children && children}
      {!userSbmtButton && <div className={`flex items-center justify-between`}>
        <button
          className={`hover:bg-belplit_2 rounded-md mx-auto px-2 py-1 hover:text-zinc-900 transition-all`}
          type='submit'
        >
          {buttonText ? buttonText : 'Отправить'}
        </button>
        {redirectButton && (
          <Link href={redirectButton.link} passHref>
            <button
              className={`hover:bg-belplit_2 rounded-md mx-auto px-2 py-1 hover:text-zinc-900 transition-all`}
              type='submit'
            >
              {redirectButton.buttonText}
            </button>
          </Link>
        )}
      </div>}
    </form>
  );
};

export default FormWrapper;

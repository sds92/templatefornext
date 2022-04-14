import React from 'react';
import Link from 'next/link';

export default function Form({ errorMessage, onSubmit }) {
  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <label>
          <span>Введите токен</span>
          <input type='text' name='username' required />
        </label>

        <button
          className={`hover:bg-belplit_2 rounded-md mx-auto px-2 py-1 hover:text-zinc-900 transition-all`}
          type='submit'
        >
          Войти
        </button>

        {errorMessage && <p className='error'>{errorMessage}</p>}

        <style jsx>{`
          form,
          label {
            display: flex;
            flex-flow: column;
          }
          input {
            padding: 8px;
            margin: 0.3rem 0 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .error {
            color: brown;
            margin: 1rem 0 0;
          }
        `}</style>
      </form>
      <button
        className={`hover:bg-belplit_2 rounded-md w-full px-2 py-1 hover:text-zinc-900 transition-all`}
        type='submit'
      >
        <Link href='/register'>
          <a>Регистрация</a>
        </Link>
      </button>
    </React.Fragment>
  );
}
